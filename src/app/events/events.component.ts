import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { HttpClient } from '@angular/common/http';
import { RealTimeAPI } from 'rocket.chat.realtime.api.rxjs';

const realTimeAPI = new RealTimeAPI('wss://chat.material-exchange.com/websocket');
realTimeAPI.keepAlive().subscribe();
const auth = realTimeAPI.login('nemanja91.bacic', 'Skidalica991.');

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: any;
  channels: any;
  loginCredentials: any;
  subscription: any;

  constructor(
    private eventsService: EventsService,
    private http: HttpClient,
  ) {
  }

  async ngOnInit(): Promise<void> {
    // this.events = this.eventsService.getEvents();
    this.loginCredentials = await this.eventsService.loginAndGetToken('nemanja91.bacic', 'Skidalica991.');
    this.channels = await this.eventsService.getListOfChannels(); // https://docs.rocket.chat/api/rest-api/methods/channels/list
    console.log('Channels: ', this.channels);
    this.subscription = await this.eventsService.getSubscription(); // https://docs.rocket.chat/api/rest-api/methods/subscriptions/get
    console.log('Subscription: ', this.subscription);

    auth.subscribe(
      (data) => console.log('Data: ', data),
      (err) => console.log(err),
      () => console.log('completed'));


  }

}
