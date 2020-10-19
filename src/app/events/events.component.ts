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
      "data": [
        {
        "oId": "OR:com.lcs.wc.foundation.LCSLifecycleManaged:8618004",
        "documents": [],
        "name": "Show 6",
        "description": "Multi shows - show_1",
        "attributes": [{
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4168135",
          "documents": [],
          "name": "Start Date",
          "description": "",
          "type": "DATE",
          "value": 1600992000000,
          "attKey": "meStartDate",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 2,
          "required": false,
          "id": "4168135"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8653203",
          "documents": [],
          "name": "Max Books Count",
          "description": "",
          "type": "INTEGER",
          "value": 0,
          "attKey": "meMaxBooksCount",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 8,
          "required": false,
          "id": "8653203"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4168222",
          "documents": [],
          "name": "End Date",
          "description": "",
          "type": "DATE",
          "value": 1609372800000,
          "attKey": "meEndDate",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 3,
          "required": false,
          "id": "4168222"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8647755",
          "documents": [],
          "name": "Email Template Manufacturer",
          "description": "",
          "type": "TEXT",
          "attKey": "meEmailTemplateManufacturer",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 7,
          "required": false,
          "id": "8647755"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:98048",
          "documents": [],
          "name": "Description",
          "description": "",
          "type": "TEXTAREA",
          "value": "Multi shows - show_1",
          "attKey": "meDescription",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 0,
          "required": false,
          "id": "98048"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8639832",
          "documents": [],
          "name": "Email Template Name 4 Brand",
          "description": "",
          "type": "TEXT",
          "attKey": "meEmailTemplateName4Brand",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 5,
          "required": false,
          "id": "8639832"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8620198",
          "documents": [],
          "name": "Site URL",
          "description": "",
          "type": "TEXT",
          "value": "show6.material-exchange.com",
          "attKey": "meSiteURL",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 4,
          "required": false,
          "id": "8620198"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8639846",
          "documents": [],
          "name": "Email Template Name 4 Guest",
          "description": "",
          "type": "TEXT",
          "attKey": "meEmailTemplateName4Guest",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 6,
          "required": false,
          "id": "8639846"
        }],
        "id": "8618004"
      },
        {
        "oId": "OR:com.lcs.wc.foundation.LCSLifecycleManaged:8618008",
        "documents": [],
        "name": "Show 7",
        "description": "Multi shows - show_2",
        "attributes": [{
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4168135",
          "documents": [],
          "name": "Start Date",
          "description": "",
          "type": "DATE",
          "value": 1600992000000,
          "attKey": "meStartDate",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 2,
          "required": false,
          "id": "4168135"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8653203",
          "documents": [],
          "name": "Max Books Count",
          "description": "",
          "type": "INTEGER",
          "value": 0,
          "attKey": "meMaxBooksCount",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 8,
          "required": false,
          "id": "8653203"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4168222",
          "documents": [],
          "name": "End Date",
          "description": "",
          "type": "DATE",
          "value": 1609372800000,
          "attKey": "meEndDate",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 3,
          "required": false,
          "id": "4168222"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8647755",
          "documents": [],
          "name": "Email Template Manufacturer",
          "description": "",
          "type": "TEXT",
          "attKey": "meEmailTemplateManufacturer",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 7,
          "required": false,
          "id": "8647755"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:98048",
          "documents": [],
          "name": "Description",
          "description": "",
          "type": "TEXTAREA",
          "value": "Multi shows - show_2",
          "attKey": "meDescription",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 0,
          "required": false,
          "id": "98048"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8639832",
          "documents": [],
          "name": "Email Template Name 4 Brand",
          "description": "",
          "type": "TEXT",
          "value": "nextTextileShow_Brand",
          "attKey": "meEmailTemplateName4Brand",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 5,
          "required": false,
          "id": "8639832"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8620198",
          "documents": [],
          "name": "Site URL",
          "description": "",
          "type": "TEXT",
          "value": "dev-library.material-exchange.com",
          "attKey": "meSiteURL",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 4,
          "required": false,
          "id": "8620198"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8639846",
          "documents": [],
          "name": "Email Template Name 4 Guest",
          "description": "",
          "type": "TEXT",
          "value": "nextTextileShow_Guest",
          "attKey": "meEmailTemplateName4Guest",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 6,
          "required": false,
          "id": "8639846"
        }],
        "id": "8618008"
      },
        {
        "oId": "OR:com.lcs.wc.foundation.LCSLifecycleManaged:8642519",
        "documents": [],
        "name": "Next Textile Material Show",
        "description": " ",
        "attributes": [{
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4168135",
          "documents": [],
          "name": "Start Date",
          "description": "",
          "type": "DATE",
          "value": 1602633600000,
          "attKey": "meStartDate",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 2,
          "required": false,
          "id": "4168135"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8653203",
          "documents": [],
          "name": "Max Books Count",
          "description": "",
          "type": "INTEGER",
          "value": 0,
          "attKey": "meMaxBooksCount",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 8,
          "required": false,
          "id": "8653203"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4168222",
          "documents": [],
          "name": "End Date",
          "description": "",
          "type": "DATE",
          "value": 1604016000000,
          "attKey": "meEndDate",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 3,
          "required": false,
          "id": "4168222"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8647755",
          "documents": [],
          "name": "Email Template Manufacturer",
          "description": "",
          "type": "TEXT",
          "value": "nextTextileShow_Manufacturer",
          "attKey": "meEmailTemplateManufacturer",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 7,
          "required": false,
          "id": "8647755"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:98048",
          "documents": [],
          "name": "Description",
          "description": "",
          "type": "TEXTAREA",
          "value": " ",
          "attKey": "meDescription",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 0,
          "required": false,
          "id": "98048"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8639832",
          "documents": [],
          "name": "Email Template Name 4 Brand",
          "description": "",
          "type": "TEXT",
          "value": "nextTextileShow_Brand",
          "attKey": "meEmailTemplateName4Brand",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 5,
          "required": false,
          "id": "8639832"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8620198",
          "documents": [],
          "name": "Site URL",
          "description": "",
          "type": "TEXT",
          "attKey": "meSiteURL",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 4,
          "required": false,
          "id": "8620198"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8639846",
          "documents": [],
          "name": "Email Template Name 4 Guest",
          "description": "",
          "type": "TEXT",
          "value": "nextTextileShow_Guest",
          "attKey": "meEmailTemplateName4Guest",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 6,
          "required": false,
          "id": "8639846"
        }],
        "id": "8642519"
      },
        {
        "oId": "OR:com.lcs.wc.foundation.LCSLifecycleManaged:8635647",
        "documents": [],
        "name": "KingPins Show",
        "description": " ",
        "attributes": [{
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4168135",
          "documents": [],
          "name": "Start Date",
          "description": "",
          "type": "DATE",
          "value": 1602460800000,
          "attKey": "meStartDate",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 2,
          "required": false,
          "id": "4168135"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8653203",
          "documents": [],
          "name": "Max Books Count",
          "description": "",
          "type": "INTEGER",
          "value": 0,
          "attKey": "meMaxBooksCount",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 8,
          "required": false,
          "id": "8653203"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:4168222",
          "documents": [],
          "name": "End Date",
          "description": "",
          "type": "DATE",
          "value": 1604016000000,
          "attKey": "meEndDate",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 3,
          "required": false,
          "id": "4168222"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8647755",
          "documents": [],
          "name": "Email Template Manufacturer",
          "description": "",
          "type": "TEXT",
          "attKey": "meEmailTemplateManufacturer",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 7,
          "required": false,
          "id": "8647755"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:98048",
          "documents": [],
          "name": "Description",
          "description": "",
          "type": "TEXTAREA",
          "value": " ",
          "attKey": "meDescription",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 0,
          "required": false,
          "id": "98048"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8639832",
          "documents": [],
          "name": "Email Template Name 4 Brand",
          "description": "",
          "type": "TEXT",
          "value": "WelcomeToMaterialsShowBrandTemplate",
          "attKey": "meEmailTemplateName4Brand",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 5,
          "required": false,
          "id": "8639832"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8620198",
          "documents": [],
          "name": "Site URL",
          "description": "",
          "type": "TEXT",
          "value": "kingpins-dev.material-exchange.com",
          "attKey": "meSiteURL",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 4,
          "required": false,
          "id": "8620198"
        }, {
          "oId": "OR:com.ptc.core.lwc.server.LWCFlexAttDefinition:8639846",
          "documents": [],
          "name": "Email Template Name 4 Guest",
          "description": "",
          "type": "TEXT",
          "value": " ",
          "attKey": "meEmailTemplateName4Guest",
          "flexAttrGroup": {"flexAttrGroupName": "General Attributes", "flexAttrGroupOrderNumber": 0},
          "flexAttrOrderNumber": 6,
          "required": false,
          "id": "8639846"
        }],
        "id": "8635647"
      }],
      "status": 1, "message": ""
    }
  ];
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
    console.log('New Events Data: ', this.newEvents);
  }

}
