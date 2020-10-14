import {Component, OnInit} from '@angular/core';
import { EventsService } from '../services/events.service';
import { HttpClient } from '@angular/common/http';
import { RealTimeAPI } from 'rocket.chat.realtime.api.rxjs';
import {strict} from "assert";
import {stringify} from "querystring"; // https://www.npmjs.com/package/rocket.chat.realtime.api.rxjs


const realTimeAPI = new RealTimeAPI('wss://chat.material-exchange.com/websocket');
realTimeAPI.keepAlive().subscribe();
const auth = realTimeAPI.login('nemanja91.bacic', 'Skidalica991.');
auth.subscribe(
  (data) => console.log('Data: ', data),
  (err) => console.log(err),
  () => console.log('completed'));

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

  channels: any;
  loginCredentials: any;
  subscription: any;
  channelInfo: any;
  channelMembers: any;
  searchText = '';

  hideChat(): void {
    this.status = !this.status;
  }

  /**
   * Channels
   * @param channelId
   */
  async showSingle(channelId): Promise<void> {
    this.singleData = !this.singleData;
    this.channelInfo = await this.eventsService.getSingleChannel(channelId);
    // console.log('Channel info:', this.channelInfo);
    const promises = this.channelInfo.map(async (item) => {
      const userName = await this.getUserInfo(item.u._id);
      item.name = userName;
      console.log(item);
    });
    await Promise.all(promises);
  }
  async channelUsers(channelId): Promise<void> {
    this.showChannelUsers = !this.showChannelUsers;
    // console.log('Channel ID:', channelId);
    this.channelMembers = await this.eventsService.getSingleChannelUsers(channelId);
    // const promises = this.channelMembers.map(async (item) => {
    //   const image = await this.getSingleUserAvatar(item.username);
    //   item.image = image;
    //   console.log(item);
    // });
    // await Promise.all(promises);
  }

  /**
   * Users
   * @param userId
   */
  showSingleChatInfo(userId): void {
    this.singleChatInfo = !this.singleChatInfo;
    console.log('User ID:', userId);
  }
  constructor(
    private eventsService: EventsService,
  ) {
  }

  // ngOnInit():void {
  //
  // }
  async getUserInfo(userID): Promise<void> {
    return this.eventsService.getUserInfo(userID);
  }
  async getSingleUserAvatar(userID): Promise<void> {
    return this.eventsService.getUserAvatar(userID);
  }
  async ngOnInit(): Promise<void> {
    // this.events = this.eventsService.getEvents();
    this.loginCredentials = await this.eventsService.loginAndGetToken('nemanja91.bacic', 'Skidalica991.');
    this.channels = await this.eventsService.getListOfChannels(); // https://docs.rocket.chat/api/rest-api/methods/channels/list
    this.subscription = await this.eventsService.getSubscription(); // https://docs.rocket.chat/api/rest-api/methods/subscriptions/get
    // this.getUserInfo = await this.eventsService.getUserAvatar('xzkARGsFmA6nvaZax');
    realTimeAPI.callMethod('rooms/get', [{ $date: 0 }]);

  }

}
