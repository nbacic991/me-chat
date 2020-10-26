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

    } catch (error) {
      console.log('CSRF error:', error);
    }

  }
}
