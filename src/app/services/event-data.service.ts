import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  data: 'item';
  constructor() { }

  async getAllEvents(eventType: string): Promise<any> {
    const host = 'https://dev-library-master.material-exchange.com:8443';
    const csrfUrl = host + '/Windchill/servlet/rest/security/csrf';
    const eventsUrl = 'https://dev-library-master.material-exchange.com:8443/Windchill/servlet/rest/meapi/company/getActiveShows';
    try {
      const csrfToken = await fetch(csrfUrl, {
        method: 'GET',
        credentials: 'include'
      });
      const CSRF = await csrfToken.json();
      console.log('CSRF token: ', CSRF);
      const response = await fetch(eventsUrl, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          CSRF_NONCE: CSRF['items'][0]['attributes']['nonce'],
          Accept: '*/*',
        },
        credentials: 'include',
        body: JSON.stringify('ALL')
      });
      const resToJson = await response.json();
      return resToJson;
      // const csrfToken = await this.http.get(csrfUrl, {
      //   withCredentials: true
      // }).subscribe(
      //   async (res) => {
      //     console.log('CSRF response: ', res);
      //     // const response = await fetch(eventsUrl, {
      //     //   method: 'POST',
      //     //   headers: {
      //     //     'Content-type': 'application/json',
      //     //     CSRF_NONCE: res['items'][0]['attributes']['nonce'],
      //     //     Accept: '*/*',
      //     //   },
      //     //   credentials: 'include',
      //     //   body: JSON.stringify('ALL')
      //     // });
      //     // const resToJson = await response.json();
      //     // return resToJson;
      //     const eventResponse = await this.http.post(eventsUrl, JSON.stringify('ALL'), {
      //       withCredentials: true,
      //       headers: {
      //         'Content-type': 'application/json',
      //         //     // tslint:disable-next-line:no-string-literal
      //         CSRF_NONCE: res['items'][0]['attributes']['nonce'],
      //         // Accept: '*/*'
      //       },
      //     }).subscribe(
      //       (eveRes) => {
      //         console.log('Event res: ', eveRes);
      //       },
      //       (eveErr) => {
      //         console.log('Event err: ', eveErr);
      //       }
      //     );
      //     const newEventsData = eventResponse;
      //     console.log('New Events Data: ', newEventsData);
      //     return newEventsData;
      //   },
      //   (err) => {
      //     console.log('CSRF Error: ', err);
      //   }
      // );

    } catch (error) {
      console.log('CSRF error:', error);
    }

  }
}
