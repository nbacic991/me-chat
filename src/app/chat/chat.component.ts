import {Component, OnInit} from '@angular/core';
import {EventsService} from '../services/events.service';
import {RealTimeAPI} from 'rocket.chat.realtime.api.rxjs';
import {CookieService} from 'ngx-cookie-service';
import {ToastrService} from 'ngx-toastr';
import * as moment from 'moment';


const realTimeAPI = new RealTimeAPI('wss://chat10.material-exchange.com/websocket');

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent implements OnInit {
  status: boolean;
  singleData: boolean;
  showChannelUsers: boolean;
  singleChatInfo: boolean;
  messagesLoaded: Promise<boolean>;

  /* Is User Loged In */
  loggedIn: string;
  channels: any;
  loginCredentials: any;
  subscription: any;
  channelInfo: any;
  channelData: any;
  channelMembers: any;
  currentChannel: string;
  currentChannelId: string;
  currentChannelMembers: string;
  searchText = '';
  singleChatMessages: any;
  singleMessage: any;
  messageText: string;
  currentUserName: string;
  currentUser: string;
  observable: any;
  usersList: any;
  singleFeed: boolean;
  feedList: any;
  currentFeed: any;
  feedMessages: any;
  fullText: boolean;
  currentTime: any;

  /**
   * Current user
   */
  currentChatUser: string;

  /**
   * Test
   */
  newMessages: any;
  loadingMessages: string;


  constructor(
    private toastr: ToastrService,
    private eventsService: EventsService,
    private cookieService: CookieService
  ) {
  }

  async getScrollingElement(event, channelId): Promise<any> {
    // console.log(event);
    this.loadingMessages = 'Loading new messages...';
    if (event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
      const offset = this.channelInfo.length;
      this.newMessages = await this.eventsService.loadMoreChannelMessages(channelId, offset);
      this.channelInfo = this.channelInfo.concat(this.newMessages);
      const promises = this.channelInfo.map(async (item) => {
        // console.log(item.u);
        if (item.u && item.u && item.u._id) {
          const userName = await this.getUserInfo(item.u._id);
          item.name = userName;
        }
      });
      await Promise.all(promises);
      // console.log(this.channelInfo);
    }

  }

  showFullText(event): void {
    // this.fullText = !this.fullText;
    event.target.parentNode.classList.toggle('full');
  }

  hideChat(): void {
    this.status = !this.status;
  }

  /**
   * Channels
   */
  async showSingle(channelId): Promise<void> {
    this.singleData = !this.singleData;
    this.channelData = await this.eventsService.getSingleChannelInfo(channelId);
    this.currentChannel = this.channelData.channel.name;
    this.currentChannelId = channelId;
    this.currentChannelMembers = this.channelData.channel.usersCount;
    this.channelInfo = await this.eventsService.getSingleChannel(channelId);
    const promises = this.channelInfo.map(async (item) => {
      const userName = await this.getUserInfo(item.u._id);
      item.name = userName;
    });
    await Promise.all(promises);

  }

  async channelUsers(channelId): Promise<void> {
    this.showChannelUsers = !this.showChannelUsers;
    this.channelMembers = await this.eventsService.getSingleChannelUsers(channelId);
  }

  async getBackToChannel(channelId): Promise<void> {
    this.singleChatInfo = !this.singleChatInfo;
    this.singleData = !this.singleData;
    this.channelMembers = await this.eventsService.getSingleChannelUsers(channelId);

  }

  /**
   * Feed
   */
  async getFeedInfo(groupId): Promise<any> {
    this.singleFeed = !this.singleFeed;
    this.currentFeed = await this.eventsService.getFeedInfo(groupId);
    this.feedMessages = await this.eventsService.getFeedMessages(groupId);
    const promises = this.feedMessages.map(async (item) => {
      const userName = await this.getUserInfo(item.u._id);
      item.name = userName;
    });
    await Promise.all(promises);
    console.log(this.currentFeed);
  }

  /**
   * Users
   */
  async showSingleChatInfo(userUsername, userID): Promise<void> {
    this.singleChatInfo = !this.singleChatInfo;
    this.singleChatMessages = await this.eventsService.singleUserMessages(userUsername);
    const myToken = this.cookieService.get('userNewId');
    const promises = this.singleChatMessages.map((item) => {
      const token = item.u._id;
      if (token === myToken) {
        item.itsMe = 'me';
      }
    });
    await Promise.all(promises);
    const userInfo = await this.eventsService.getUserInfo(userID);
    if (userInfo) {
      // Get subscriptions, will respond with message from server as { msg: 'result' .... }
      realTimeAPI.sendMessage({
        msg: 'sub',
        id: userInfo.user._id,
        name: 'stream-room-messages',
        params: [
          this.singleChatMessages[0].rid,
          false
        ]
      });
    }

    this.currentUserName = userInfo.user.name;
    this.currentUser = userUsername;
  }

  async sendDirectUserMessage(userName, messageText): Promise<void> {
    const myToken = this.cookieService.get('userNewId');
    const user = '@' + userName;
    const message = messageText;
    this.singleMessage = await this.eventsService.sendDirectMessage(user, message);
    const messageData = this.singleMessage;
    if (messageData.success === true) {
      this.messageText = '';
      this.singleChatMessages = await this.eventsService.singleUserMessages(userName);
      const promises = this.singleChatMessages.map((item) => {
        const token = item.u._id;
        if (token === myToken) {
          item.itsMe = 'me';
        }
      });
      await Promise.all(promises);
    }
  }

  async getUserInfo(userID): Promise<void> {
    return this.eventsService.getUserInfo(userID);
  }

  async getAllChannels(): Promise<void> {
    this.singleData = !this.singleData;
    this.channels = await this.eventsService.getListOfChannels();
  }

  async getAllFeeds(): Promise<any> {
    this.singleFeed = !this.singleFeed;
    this.feedList = await this.eventsService.getFeedList();
  }

  async ngOnInit(): Promise<void> {
    // const checkLogin = this.cookieService.get('JSESSIONID');
    // if (checkLogin) {
    //   console.log('Logged In');
    //   this.loggedIn = await this.cookieService.get('JSESSIONID');
    //   console.log(this.loggedIn);
    // } else {
    //   console.log('Not logged in');
    // }

    this.currentTime = moment().format('HH:mm:ss');
    console.log(this.currentTime);

    this.currentChatUser = this.cookieService.get('userNewId');
    this.feedList = await this.eventsService.getFeedList();
    // this.events = this.eventsService.getEvents();
    this.loginCredentials = await this.eventsService.loginAndGetToken('kingpin-admin', 'IABuRwJ*GErLmM5Y');
    // this.loginCredentials = await this.eventsService.loginAndGetToken('nemanja91.bacic', 'Skidalica991.');
    this.usersList = await this.eventsService.getListOfUsers();
    // console.log(this.usersList);
    this.channels = await this.eventsService.getListOfChannels(); // https://docs.rocket.chat/api/rest-api/methods/channels/list
    this.subscription = await this.eventsService.getSubscription(); // https://docs.rocket.chat/api/rest-api/methods/subscriptions/get
    realTimeAPI.callMethod('rooms/get', [{$date: 0}]);

    // Socket
    realTimeAPI.connectToServer(); // handshake
    realTimeAPI.keepAlive().subscribe();  // keep alive `ping-pong`

    realTimeAPI.loginWithAuthToken(this.loginCredentials.data.authToken).subscribe();  // login and create observable;

    // Messages from server
    realTimeAPI.onMessage(async (message: any) => {
      console.log('Message: ', message);
      if (message.msg === 'result' && message.id === '42') {
        message.result.update.map((item) => {
          const subID = item._id;
          const subRID = item.rid;
          /* Subscribtion */
          realTimeAPI.sendMessage({
            msg: 'sub',
            id: subID,
            name: 'stream-room-messages',
            params: [
              subRID,
              false
            ]
          });
        });

      } else if (message.msg === 'changed') {
        const res = await this.eventsService.singleUserMessages(message.fields.args[0].u.username);
        this.toastr.success(message.fields.args[0].u.username, 'New message received from:');
        this.singleChatMessages = res;
      }
    });

    // Error handling
    realTimeAPI.onError((error: any) => {
      console.log('Error: ', error);
    });

    // Get subscriptions, will respond with message from server as { msg: 'result' .... }
    realTimeAPI.sendMessage({
      msg: 'method',
      method: 'subscriptions/get',
      id: '42',
      params: [{$date: 0}]
    });


  }

}
