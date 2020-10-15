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

  events = [
    {
      data: [
        {
          oId: 'OR:com.lcs.wc.foundation.LCSLifecycleManaged:4969105',
          documents: [
            {
              oId: 'VR:com.lcs.wc.document.LCSDocument:2167900',
              documents: [],
              name: '137145_thumbnail_small.jpg',
              description: '',
              publicURL: 'http://icenterv01.ptc.com/Windchill/servlet/rest/meapi/unauthorized/getDocument?ContentHolder=com.lcs.wc.document.LCSDocument:2167901',
              extension: 'jpg',
              fileName: '137145_thumbnail_small.jpg',
              size: 13477,
              actualHeight: 0,
              actualWidth: 0,
              type: 'COMPANY_LOGO_FILE_DEFAULT',
              id: '2167900'
            },
            {
              oId: 'VR:com.lcs.wc.document.LCSDocument:5110347',
              documents: [],
              name: '1594677791657.JPEG',
              description: '',
              publicURL: 'http://icenterv01.ptc.com/Windchill/servlet/rest/meapi/unauthorized/getDocument?ContentHolder=com.lcs.wc.document.LCSDocument:5110348',
              extension: 'JPEG',
              fileName: '1594677791657.JPEG',
              size: 107302,
              actualHeight: 0,
              actualWidth: 0,
              type: 'COMPANY_LOGO_FILE_DEFAULT',
              id: '5110347'
            }
          ],
          name: 'Material Show 1',
          attributes: [{
            oId: 'OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:160218',
            documents: [],
            name: 'Description',
            description: '',
            type: 'TEXTAREA',
            attKey: 'meDescription',
            flexAttrGroup: {flexAttrGroupName: 'General Attributes', flexAttrGroupOrderNumber: 0},
            flexAttrOrderNumber: 0,
            required: false,
            id: '160218'
          }, {
            oId: 'OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4807218',
            documents: [],
            name: 'Start Date',
            description: '',
            type: 'DATE',
            value: 1624665600000,
            attKey: 'meStartDate',
            flexAttrGroup: {flexAttrGroupName: 'General Attributes', flexAttrGroupOrderNumber: 0},
            flexAttrOrderNumber: 3,
            required: false,
            id: '4807218'
          }, {
            oId: 'OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4807179',
            documents: [],
            name: 'End Date',
            description: '',
            type: 'DATE',
            value: 1656201600000,
            attKey: 'meEndDate',
            flexAttrGroup: {flexAttrGroupName: 'General Attributes', flexAttrGroupOrderNumber: 0},
            flexAttrOrderNumber: 2,
            required: false,
            id: '4807179'
          }, {
            oId: 'OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:5339349',
            documents: [],
            name: 'Site URL',
            description: '',
            type: 'TEXT',
            value: 'xyz.com',
            attKey: 'meSiteURL',
            flexAttrGroup: {flexAttrGroupName: 'General Attributes', flexAttrGroupOrderNumber: 0},
            flexAttrOrderNumber: 4,
            required: false,
            id: '5339349'
          }
          ],
          id: '4969105'
        },
        {
          oId: 'OR:com.lcs.wc.foundation.LCSLifecycleManaged:5026407',
          documents: [],
          name: 'material show 2',
          description: 'second show',
          attributes: [{
            oId: 'OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:160218',
            documents: [],
            name: 'Description',
            description: '',
            type: 'TEXTAREA',
            value: 'second show',
            attKey: 'meDescription',
            flexAttrGroup: {flexAttrGroupName: 'General Attributes', flexAttrGroupOrderNumber: 0},
            flexAttrOrderNumber: 0,
            required: false,
            id: '160218'
          }, {
            oId: 'OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4807218',
            documents: [],
            name: 'Start Date',
            description: '',
            type: 'DATE',
            value: 1594252800000,
            attKey: 'meStartDate',
            flexAttrGroup: {flexAttrGroupName: 'General Attributes', flexAttrGroupOrderNumber: 0},
            flexAttrOrderNumber: 3,
            required: false,
            id: '4807218'
          }, {
            oId: 'OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4807179',
            documents: [],
            name: 'End Date',
            description: '',
            type: 'DATE',
            value: 1625875200000,
            attKey: 'meEndDate',
            flexAttrGroup: {flexAttrGroupName: 'General Attributes', flexAttrGroupOrderNumber: 0},
            flexAttrOrderNumber: 2,
            required: false,
            id: '4807179'
          }, {
            oId: 'OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:5339349',
            documents: [],
            name: 'Site URL',
            description: '',
            type: 'TEXT',
            attKey: 'meSiteURL',
            flexAttrGroup: {flexAttrGroupName: 'General Attributes', flexAttrGroupOrderNumber: 0},
            flexAttrOrderNumber: 4,
            required: false,
            id: '5339349'
          }
          ],
          id: '5026407'
        }
      ],
      status: 1,
      message: ''
    }
  ];
  channels: any;
  loginCredentials: any;
  subscription: any;
  date: any;

  constructor(
    private eventsService: EventsService,
    private http: HttpClient,

  ) {
  }

  ngOnInit(): void {
    // this.events = this.eventsService.getAllEvents('ALL');
    console.log('Events', this.events);
  }

}
