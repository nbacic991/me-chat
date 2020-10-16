import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { HttpClient } from '@angular/common/http';
import { RealTimeAPI } from 'rocket.chat.realtime.api.rxjs';
import { CookieService } from 'ngx-cookie-service'; // https://www.npmjs.com/package/rocket.chat.realtime.api.rxjs

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  constructor(
    private eventsService: EventsService,
    private cookieService: CookieService
  ) { }

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.eventsService.loginAndGetToken('test1', 'Qp7fCHWthlJi-5j5');
  }

}
