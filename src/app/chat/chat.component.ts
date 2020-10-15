import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { HttpClient } from '@angular/common/http';
import { RealTimeAPI } from 'rocket.chat.realtime.api.rxjs';
import { CookieService } from 'ngx-cookie-service'; // https://www.npmjs.com/package/rocket.chat.realtime.api.rxjs


const realTimeAPI = new RealTimeAPI('wss://chat10.material-exchange.com/websocket');

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  peoples = [
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    },
    {
      picture: 'jeans',
      name: 'Jeans & Co.',
      date: 'Oct 8, 12:15pm',
      position: 'Co-founder & Co-CEO, TechSt...',
      message: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed fermentum aq... '
    }
  ];
  dms = [
    {
      picture: 'letter_a',
      name: 'Alma Peterson',
      message_text: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed ferme... ',
      messages: 10,
      is_online: true
    },
    {
      picture: 'peter_johnson',
      name: 'Peter Johnson',
      message_text: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed ferme... ',
      messages: 10,
      is_online: true
    },
    {
      picture: 'peter_johnson',
      name: 'Peter Johnson',
      message_text: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed ferme... ',
      messages: 10,
      is_online: true
    },
    {
      picture: 'peter_johnson',
      name: 'Peter Johnson',
      message_text: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed ferme... ',
      messages: 10,
      is_online: true
    },
    {
      picture: 'peter_johnson',
      name: 'Peter Johnson',
      message_text: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed ferme... ',
      messages: 10,
      is_online: true
    },
    {
      picture: 'letter_a',
      name: 'Alma Peterson',
      message_text: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed ferme... ',
      messages: 10,
      is_online: true
    },
    {
      picture: 'peter_johnson',
      name: 'Peter Johnson',
      message_text: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed ferme... ',
      messages: 10,
      is_online: true
    },
    {
      picture: 'peter_johnson',
      name: 'Peter Johnson',
      message_text: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed ferme... ',
      messages: 10,
      is_online: false
    },
    {
      picture: 'peter_johnson',
      name: 'Peter Johnson',
      message_text: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed ferme... ',
      messages: 10,
      is_online: true
    },
    {
      picture: 'peter_johnson',
      name: 'Peter Johnson',
      message_text: 'Sed sit amet ante at magna vehicula posuere id sit amet arcu. Proin pulvinar felis sed ferme... ',
      messages: 10,
      is_online: true
    }
  ];
  filters = ['Designer', 'Leather', 'AI', 'Saas & Enterprise', 'Recrutment & Jobs', 'Social Networking & Collaboration', 'Advertising & Marketing'];
  status: boolean;
  singleData: boolean;
  showChannelUsers: boolean;
  singleChatInfo: boolean;
  messagesLoaded: Promise<boolean>;

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


  constructor(
    private eventsService: EventsService,
    private cookieService: CookieService
  ) {
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
    console.log(this.channelData);
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
   * Users
   */
  async showSingleChatInfo(userUsername, userID): Promise<void> {
    this.singleChatInfo = !this.singleChatInfo;
    this.singleChatMessages = await this.eventsService.singleUserMessages(userUsername);
    const myToken = this.cookieService.get('userNewId');
    console.log(this.singleChatMessages);
    const promises = this.singleChatMessages.map((item) => {
      const token = item.u._id;
      if (token === myToken) {
        item.itsMe = 'me';
      }
    });
    await Promise.all(promises);
    const userInfo = await this.eventsService.getUserInfo(userID);
    this.currentUserName = userInfo.user.name;
    this.currentUser = userUsername;
    console.log(userInfo);
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
  async ngOnInit(): Promise<void> {
    // this.events = this.eventsService.getEvents();
    // this.loginCredentials = await this.eventsService.loginAndGetToken('test1', 'Qp7fCHWthlJi-5j5');
    this.loginCredentials = await this.eventsService.loginAndGetToken('nemanja91.bacic', 'Skidalica991.');
    this.usersList = await this.eventsService.getListOfUsers();
    console.log(this.usersList);
    this.channels = await this.eventsService.getListOfChannels(); // https://docs.rocket.chat/api/rest-api/methods/channels/list
    this.subscription = await this.eventsService.getSubscription(); // https://docs.rocket.chat/api/rest-api/methods/subscriptions/get
    // this.getUserInfo = await this.eventsService.getUserAvatar('xzkARGsFmA6nvaZax');
    realTimeAPI.callMethod('rooms/get', [{ $date: 0 }]);

    // Socket
    realTimeAPI.connectToServer(); // handshake
    realTimeAPI.keepAlive().subscribe();  // keep alive `ping-pong`

    realTimeAPI.loginWithAuthToken(this.loginCredentials.data.authToken).subscribe();  // login and create observable;

    // Messages from server
    realTimeAPI.onMessage((message: any) => {
      console.log('Message: ', message);
    });

    // Get subscriptions, will respond with message from server
    realTimeAPI.sendMessage({
      msg: 'method',
      method: 'subscriptions/get',
      id: '42',
      params: [{ $date: 0 }]
    });
  }

}
