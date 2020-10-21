import { Component, OnInit, Input } from '@angular/core';
import { EventDataService } from '../services/event-data.service';
import { EventsService } from '../services/events.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  eventDetails: any;
  eventId;
  eventItem: any;

  eventVideos = [
    {
      title: 'Video 1',
      image: 'video_1'
    },
    {
      title: 'Video 2',
      image: 'video_2'
    },
    {
      title: 'Video 3',
      image: 'video_3'
    },
    {
      title: 'Video 4',
      image: 'video_4'
    }
  ];

  constructor(
    private titleService: Title,
    private eventsService: EventsService,
    private eventDataService: EventDataService,
    private route: ActivatedRoute,
  ) {
  }

  async ngOnInit(): Promise<any> {
    this.eventId = this.route.snapshot.params.eventId;
    this.eventDetails = await this.eventDataService.getAllEvents('ALL');
    const eventDataPromises = this.eventDetails.data.map((item) => {
      if (item.id === this.eventId) {
        this.eventItem = item;
      }
    });
    await Promise.all(eventDataPromises);
    this.titleService.setTitle('Material Exchange | ' + this.eventItem.name);
    // this.eventDetails = this.eventsService.getEventData(this.eventId);
  }

}
