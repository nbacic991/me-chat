import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { EventDataService } from '../services/event-data.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  newEvents: any;
  loginCredentials: any;
  subscription: any;
  date: any;
  demoData: any;
  constructor(
    private titleService: Title,
    private eventsService: EventsService,
    private eventDataService: EventDataService,
    private http: HttpClient,
  ) {
    this.titleService.setTitle('Material Exchange | Events');
  }
  async ngOnInit(): Promise<void> {
    this.newEvents = await this.eventDataService.getAllEvents('ALL');
    // this.eventDataService.data = await this.eventsService.getAllEvents('ALL');
    // const promises = this.newEvents.map(async (item) => {
    //   console.log('Single event item: ', item);
    //   // const userName = await this.newEvents(item.u._id);
    //   // item.name = userName;
    // });
    // await Promise.all(promises);
  }

}
