import {Component, OnInit} from '@angular/core';
import {EventsService} from '../services/events.service';
import {HttpClient} from '@angular/common/http';

// const realTimeAPI = new RealTimeAPI('wss://chat10.material-exchange.com/websocket');
// realTimeAPI.keepAlive().subscribe();
// const auth = realTimeAPI.login('nemanja91.bacic', 'Skidalica991.');
// auth.subscribe(
//   (data) => console.log('Data: ', data),
//   (err) => console.log(err),
//   () => console.log('completed'));

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

  constructor(
    private eventsService: EventsService,
    private http: HttpClient,
  ) {
  }
  async ngOnInit(): Promise<void> {
    this.newEvents = await this.eventsService.getAllEvents('ALL');
    // const promises = this.newEvents.map(async (item) => {
    //   console.log('Single event item: ', item);
    //   // const userName = await this.newEvents(item.u._id);
    //   // item.name = userName;
    // });
    // await Promise.all(promises);
    console.log('New Events Data: ', this.newEvents);
  }

}
