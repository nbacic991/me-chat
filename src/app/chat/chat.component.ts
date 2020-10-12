import {Component, OnInit} from '@angular/core';

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
  channels = [
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '2',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: false
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '2'
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '2'
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
    },
    {
      picture: 'channel',
      name: 'Leather items',
      members: '137',
      messages: '0',
      channel_locked: true
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

  hideChat(): void {
    this.status = !this.status;
  }
  showSingle(channelId): void {
    this.singleData = !this.singleData;
    console.log('Channel ID:', channelId);
  }
  channelUsers(channelId): void {
    this.showChannelUsers = !this.showChannelUsers;
    console.log('Channel ID:', channelId);
  }
  showSingleChatInfo(userId): void {
    this.singleChatInfo = !this.singleChatInfo;
    console.log('User ID:', userId);
  }
  constructor() {
  }

  ngOnInit(): void {

  }

}
