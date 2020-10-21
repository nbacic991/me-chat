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
  singleDMInfo: boolean;
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
  singleChannelMessage: any;
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
  feedRoles: any;
  fullText: boolean;
  currentTime: any;
  messagingLocked = true;

  /**
   * Current user
   */
  currentChatUser: string;

  /**
   * Test
   */
  newMessages: any;
  loadingMessages: string;

  /**
   * Demo
   */
  iSentIt: boolean;


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
    this.searchText = '';
    this.singleData = !this.singleData;
    this.channelData = await this.eventsService.getSingleChannelInfo(channelId);
    console.log('Channel Data: ', this.channelData);

    this.currentChannel = this.channelData.channel.name;
    this.currentChannelId = channelId;
    this.currentChannelMembers = this.channelData.channel.usersCount;
    this.channelInfo = await this.eventsService.getSingleChannel(channelId);
    // realTimeAPI.sendMessage({
    //   msg: 'sub',
    //   id: userInfo.user._id,
    //   name: 'stream-room-messages',
    //   params: [
    //     this.singleChatMessages[0].rid,
    //     false
    //   ]
    // });
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
    this.searchText = '';
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
    if (this.currentFeed.group._id === this.loginCredentials.data.isAdminTo) {
      this.messagingLocked = false;
    }

    this.feedMessages = await this.eventsService.getFeedMessages(groupId);
    const promises = this.feedMessages.map(async (item) => {
      const userName = await this.getUserInfo(item.u._id);
      item.name = userName;
    });
    await Promise.all(promises);
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
    this.iSentIt = true;
    const myToken = this.cookieService.get('userNewId');
    const user = '@' + userName;
    const message = messageText;
    this.singleMessage = await this.eventsService.sendDirectMessage(user, message);
    const messageData = this.singleMessage;
    if (messageData.success === true) {
      this.iSentIt = true;
      this.messageText = '';
      this.singleChatMessages = await this.eventsService.singleUserMessages(userName);
      // console.log(this.singleChatMessages);
      const promises = this.singleChatMessages.map((item) => {
        const token = item.u._id;
        if (token === myToken) {
          item.itsMe = 'me';
        }
      });
      await Promise.all(promises);
      this.iSentIt = false;
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
    this.feedList.map((feedItem) => {
      if (feedItem._id === this.loginCredentials.data.isAdminTo) {
        feedItem.ro = false;
      }
    });
  }

  async sendDirectChannelMessage(channel: string, channelId: string, message: string): Promise<any> {
    this.messageText = '';
    this.singleChannelMessage = await this.eventsService.sendChannelMessage(channel, message);
    this.channelInfo = await this.eventsService.getSingleChannel(channelId);
    const promises = this.channelInfo.map(async (item) => {
      const userName = await this.getUserInfo(item.u._id);
      item.name = userName;
    });
    await Promise.all(promises);
  }

  /**
   * Direct Messaging
   */
  async showSingleDMInfo(username: string, userId: string): Promise<void> {
    this.singleDMInfo = !this.singleDMInfo;
    this.singleChatMessages = await this.eventsService.singleUserMessages(username);
    const myToken = this.cookieService.get('userNewId');
    const promises = this.singleChatMessages.map((item) => {
      const token = item.u._id;
      if (token === myToken) {
        item.itsMe = 'me';
      }
    });
    await Promise.all(promises);
    const userInfo = await this.eventsService.getUserInfo(userId);
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
    this.currentUser = username;
    const unread = await this.eventsService.setMessageUnread(this.singleChatMessages[0].rid);
    if (unread.success === true) {
      const notifPromise = this.subscription.update.map(async (notifItem) => {
        const RID = notifItem.rid;
        const ridSub = RID.replace(this.loginCredentials.data.userId, '');
        this.usersList.find((singleUser) => {
          const singleUserID = singleUser._id;
          if (singleUserID === ridSub) {
            singleUser.unread = 0;
            console.log(singleUser);
          }
        });
      });
      await Promise.all(notifPromise);
    }
  }

  backToDM(): void {
    this.singleDMInfo = !this.singleDMInfo;
  }

// Sending message keyboard press
  keyPress(event: KeyboardEvent): void {
    const self = this;
    if (event.code === 'Enter') {
      const channel = this.currentChannel;
      const channelId = this.currentChannelId;
      const message = this.messageText;
      self.sendDirectChannelMessage(channel, channelId, message);
    }
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

    this.currentChatUser = this.cookieService.get('userNewId');
    this.feedList = await this.eventsService.getFeedList();

    // this.events = this.eventsService.getEvents();
    this.loginCredentials = await this.eventsService.loginAndGetToken('kingpin-admin', 'IABuRwJ*GErLmM5Y');
    this.loginCredentials.data.isAdminTo = [];
    this.feedRoles = [];
    const promises = this.feedList.map(async (item) => {
      // console.log(item);
      this.feedRoles = await this.eventsService.getFeedUserRoles(item._id);
      const feedPromise = this.feedRoles.map(async (feedItem) => {
        if (feedItem.u._id === this.loginCredentials.data.userId) {
          this.loginCredentials.data.isAdminTo = feedItem.rid;
        }
      });
    });
    await Promise.all(promises);
    this.feedList.map((feedItem) => {
      // console.log(feedItem._id);
      // console.log(this.loginCredentials.data.isAdminTo);
      if (feedItem._id === this.loginCredentials.data.isAdminTo) {
        feedItem.ro = false;
      }
    });

    this.usersList = await this.eventsService.getListOfUsers();
    // console.log(this.usersList);
    this.channels = await this.eventsService.getListOfChannels(); // https://docs.rocket.chat/api/rest-api/methods/channels/list
    // console.log(this.channels);


    realTimeAPI.callMethod('rooms/get', [{$date: 0}]);

    // Socket
    realTimeAPI.connectToServer(); // handshake
    realTimeAPI.keepAlive().subscribe();  // keep alive `ping-pong`

    realTimeAPI.loginWithAuthToken(this.loginCredentials.data.authToken).subscribe();  // login and create observable;

    // Messages from server
    realTimeAPI.onMessage(async (message: any) => {
      console.log('Message: ', message);
      if (message.msg === 'result' && message.id === '42') {
        // message.result.update.map((item) => {
        //   const subID = item._id;
        //   const subRID = item.rid;
        //   /* Subscribtion */
        //   realTimeAPI.sendMessage({
        //     msg: 'sub',
        //     id: subID,
        //     name: 'stream-room-messages',
        //     params: [
        //       subRID,
        //       false
        //     ]
        //   });
        // });

      } else if (message.msg === 'changed') {
        if (this.iSentIt === false) {
          const myToken = this.cookieService.get('userNewId');
          const res = await this.eventsService.singleUserMessages(message.fields.args[0].u.username);
          console.log(res);
          this.toastr.success(message.fields.args[0].u.username, 'New message received from:');
          // console.log(res);
          this.singleChatMessages = res;
          const chatPromises = this.singleChatMessages.map((item) => {
            const token = item.u._id;
            if (token === myToken) {
              item.itsMe = 'me';
            }
          });
          await Promise.all(chatPromises);
        }
        if (message.msg === 'changed' && message.fields.eventName === 'GENERAL') {
          console.log('It\'s a channel message:', message.fields.args);
          const channelMsgs = await this.eventsService.getSingleChannel(message.fields.args[0].rid);
          this.channelInfo = channelMsgs;
          const channelPromises = this.channelInfo.map(async (item) => {
            const userName = await this.getUserInfo(item.u._id);
            item.name = userName;
          });
          await Promise.all(channelPromises);
        }
      }
    });

    // Error handling
    realTimeAPI.onError((error: any) => {
      console.log('Error: ', error);
    });

    // // Get subscriptions, will respond with message from server as { msg: 'result' .... }
    realTimeAPI.sendMessage({
      msg: 'method',
      method: 'subscriptions/get',
      id: '42',
      params: [{$date: 0}]
    });

    this.subscription = await this.eventsService.getSubscription(); // https://docs.rocket.chat/api/rest-api/methods/subscriptions/get
    const subPromise = this.subscription.update.map(async (subItem) => {
      realTimeAPI.sendMessage({
        msg: 'sub',
        id: subItem.u._id,
        name: 'stream-room-messages',
        params: [
          subItem.rid,
          false
        ]
      });
    });
    await Promise.all(subPromise);
    const notifPromise = this.subscription.update.map(async (notifItem) => {
      const unread = notifItem.unread;
      const RID = notifItem.rid;
      const ridSub = RID.replace(this.loginCredentials.data.userId, '');
      if (unread > 0) {
        this.usersList.find((singleUser) => {
          const singleUserID = singleUser._id;
          if (singleUserID === ridSub) {
            singleUser.unread = unread;
            console.log(singleUser);
          }
        });
      }
    });
    await Promise.all(notifPromise);
  }

}
