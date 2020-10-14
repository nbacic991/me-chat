import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  eventDetails;
  eventId;

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
    private eventsService: EventsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params.albumId;
    // this.eventDetails = this.eventsService.getEventData(this.eventId);
  }

}
