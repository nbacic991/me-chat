import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// Login response example
const hcResponse = {
  status: 'success',
  data: {
    authToken: '-CpG99ucW9sDOCg0ttB4j-Ayc8nMy3qE0OeE0y0WGNy',
    userId: 'DvBynZpPmGuoFuMxv',
    me: {
      _id: 'aYjNnig8BEAWeQzMh',
      name: 'Rocket Cat',
      emails: [
        {
          address: 'rocket.cat@rocket.chat',
          verified: false
        }
      ],
      status: 'offline',
      statusConnection: 'offline',
      username: 'rocket.cat',
      utcOffset: -3,
      active: true,
      roles: [
        'admin'
      ],
      settings: {
        preferences: {}
      },
      avatarUrl: 'http://localhost:3000/avatar/test'
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  async getEvents(): Promise<any> {
    const response = this.http.get('https://jsonplaceholder.typicode.com/albums');
    return response;
  }
  async getEventData(albumId): Promise<any> {
    const response = this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    return response;
  }

  async loginAndGetToken(user: string, password: string): Promise<any> {
    try {
      const response = await fetch('https://chat.material-exchange.com/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
        },
        body: JSON.stringify({
          user,
          password
        })
      });
      const resToJson = await response.json();
      this.cookieService.set('chatToken', hcResponse.data.authToken); // set token in cookie
      this.cookieService.set('userId', hcResponse.data.me._id); // set userId in cookie
      // return resToJson;
      return hcResponse;  // hard coded response, login returns error 403 "User has no password set"
    }
    catch (error) {
      console.log(error.message);
    }
  }

  async getListOfChannels(): Promise<any> {
    const token: string = this.cookieService.get('chatToken');
    const userId: string = this.cookieService.get('userId');
    try {
      const response = await fetch('https://chat.material-exchange.com/api/v1/channels.list', {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': '-CpG99ucW9sDOCg0ttB4j-Ayc8nMy3qE0OeE0y0WGNy',  // instert token from cookie
          'X-User-Id': 'DvBynZpPmGuoFuMxv', // instert userId from cookie
        }
      });
      const resToJson = await response.json();
      return resToJson;
    }
    catch (error) {
      console.log(error.message);
    }
  }

  async getSubscription(): Promise<any> {
    try {
      const response = await fetch('https://chat.material-exchange.com/api/v1/subscriptions.get', {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': '-CpG99ucW9sDOCg0ttB4j-Ayc8nMy3qE0OeE0y0WGNy',  // instert token from cookie
          'X-User-Id': 'DvBynZpPmGuoFuMxv', // instert userId from cookie
        }
      });
      const resToJson = await response.json();
      return resToJson;
    }
    catch (error) {
      console.log(error.message);
    }
  }

}
