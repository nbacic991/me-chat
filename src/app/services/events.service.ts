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
  token: string = this.cookieService.get('chatToken');
  userId: string = this.cookieService.get('userId');
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  async getAllEvents(eventType: string): Promise<any> {
    try {
      const response = await fetch('https://dev-library-master.material-exchange.com:8443/Windchill/servlet/rest/meapi/company/getActiveShows', {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
        },
        body: JSON.stringify({
          eventType
        })
      });
      const resToJson = await response.json();
      return resToJson;
    } catch {

    }
  }
  async loginAndGetToken(user: string, password: string): Promise<any> {
    try {
      // {"ldap":true,"username":"nemanja91.bacic","ldapPass":"Skidalica991.","ldapOptions":{}}
      const response = await fetch('https://chat.material-exchange.com/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: '*/*',
        },
        body: JSON.stringify({
          ldap: true,
          username: user,
          ldapPass: password,
          ldapOptions: {}
        })
      });
      const resToJson = await response.json();
      this.cookieService.set('chatToken', resToJson.data.authToken); // set token in cookie
      this.cookieService.set('userId', resToJson.data.me._id); // set userId in cookie
      this.cookieService.set('userNewId', resToJson.data.userId); // set userId in cookie
      // return resToJson;
      return hcResponse;  // hard coded response, login returns error 403 "User has no password set"
    }
    catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Channels
   */
  async getListOfChannels(): Promise<any> {
    try {
      const response = await fetch('https://chat.material-exchange.com/api/v1/channels.list', {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        }
      });
      const firstResp = await response.json();
      const resToJson = firstResp.channels;
      return resToJson;
    }
    catch (error) {
      console.log(error.message);
    }
  }
  async getSingleChannel(channelId): Promise<any> {
    try {
      const response = await fetch(`https://chat.material-exchange.com/api/v1/channels.messages?roomId=${channelId}&count=100`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        },
        // body: JSON.stringify({
        //   offset: 10,
        //   count: 5
        // })
      });
      const resToJson = await response.json();
      // console.log(resToJson.messages);
      const retData = resToJson.messages;
      return retData;
    }
    catch (error) {
      console.log(error.message);
    }
  }
  async getSingleChannelInfo(channelId): Promise<any> {
    try {
      const response = await fetch(`https://chat.material-exchange.com/api/v1/channels.info?roomId=${channelId}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        },
        // body: JSON.stringify({
        //   offset: 10,
        //   count: 5
        // })
      });
      const resToJson = await response.json();
      return resToJson;
    }
    catch (error) {
      console.log(error.message);
    }
  }
  async getSingleChannelUsers(channelId): Promise<any> {
    try {
      const response = await fetch(`https://chat.material-exchange.com/api/v1/channels.members?roomId=${channelId}&count=200`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        }
      });
      const firstResp = await response.json();
      const resToJson = firstResp.members;
      return resToJson;
    }
    catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Users
   */
  async getUserInfo(userID): Promise<any> {
    try {
      const response = await fetch(`https://chat.material-exchange.com/api/v1/users.info?userId=${userID}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        },
      });

      const firstResp = await response.json();
      // console.log(firstResp);
      return firstResp;
    }
    catch (error) {
      console.log(error.message);
    }
  }
  async singleUserMessages(userUsername): Promise<any> {
    try {
      const response = await fetch(`https://chat.material-exchange.com/api/v1/im.messages?username=${userUsername}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        },
      });

      const firstResp = await response.json();
      const finalResp = firstResp.messages;
      return finalResp;
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
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        }
      });
      const resToJson = await response.json();
      return resToJson;
    }
    catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Send Message
   */
  async sendDirectMessage(userID: string, messageText: string): Promise<any> {

    const data = {
      channel: userID,
      text: messageText
    };
    try {
      const response = await fetch(`https://chat.material-exchange.com/api/v1/chat.postMessage`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        },
        body: JSON.stringify(data)
      });

      const firstResp = await response.json();
      return firstResp;
    }
    catch (error) {
      console.log(error.message);
    }
  }

}
