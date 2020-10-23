import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

// Login response example

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  token: string = this.cookieService.get('chatToken');
  userId: string = this.cookieService.get('userId');

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  async loginAndGetToken(user: string, password: string): Promise<any> {
    try {
      // {"ldap":true,"username":"nemanja91.bacic","ldapPass":"Skidalica991.","ldapOptions":{}}
      const response = await fetch('https://chat10.material-exchange.com/api/v1/login', {
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
      // console.log(resToJson);
      this.cookieService.set('chatToken', resToJson.data.authToken); // set token in cookie
      this.cookieService.set('userId', resToJson.data.me._id); // set userId in cookie
      this.cookieService.set('userNewId', resToJson.data.userId); // set userId in cookie
      // return resToJson;
      return resToJson;  // hard coded response, login returns error 403 "User has no password set"
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Channels
   */
  async getFeedList(): Promise<any> {
    try {
      const response = await fetch('https://chat10.material-exchange.com/api/v1/groups.list', {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        }
      });
      const firstResp = await response.json();
      const resToJson = firstResp.groups;
      return resToJson;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getListOfChannels(): Promise<any> {
    try {
      const response = await fetch('https://chat10.material-exchange.com/api/v1/channels.list', {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  async getSingleChannel(channelId): Promise<any> {
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/channels.messages?roomId=${channelId}&count=20&offset=0`, {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  async loadMoreChannelMessages(channelId, offsetNum): Promise<any> {
    console.log(offsetNum);
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/channels.messages?roomId=${channelId}&count=5&offset=${offsetNum}`, {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  async getSingleChannelInfo(channelId): Promise<any> {
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/channels.info?roomId=${channelId}`, {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  async getSingleChannelUsers(channelId): Promise<any> {
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/channels.members?roomId=${channelId}&count=200`, {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Feed
   */
  async getFeedInfo(groupId): Promise<any> {
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/groups.info?roomId=${groupId}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        }
      });
      const firstResp = await response.json();
      return firstResp;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getFeedUserRoles(feedId): Promise<any> {
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/groups.roles?roomId=${feedId}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        }
      });
      const firstResp = await response.json();
      return firstResp.roles;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getFeedMessages(groupId): Promise<any> {
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/groups.messages?roomId=${groupId}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        }
      });
      const firstResp = await response.json();
      const resMessages = firstResp.messages;
      return resMessages;
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Users
   */
  async getListOfAllUsers(): Promise<any> {
    try {
      const response = await fetch('https://chat10.material-exchange.com/api/v1/users.list?count=1000', {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        },
      });
      const firstResp = await response.json();
      const resToJson = firstResp.users;
      return resToJson;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getListOfUsers(): Promise<any> {
    try {
      const response = await fetch('https://chat10.material-exchange.com/api/v1/im.list', {
        method: 'GET',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        },
      });
      const firstResp = await response.json();
      const resToJson = firstResp.ims;
      return resToJson;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getUserInfo(userID): Promise<any> {
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/users.info?userId=${userID}`, {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  async getUserInfoByUsername(userName): Promise<any> {
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/users.info?username=${userName}`, {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  async singleUserMessages(userUsername): Promise<any> {
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/im.messages?username=${userUsername}`, {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  async getSubscription(): Promise<any> {
    try {
      const response = await fetch('https://chat10.material-exchange.com/api/v1/subscriptions.get', {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Send Message
   */
  async sendDirectMessage(userID: string, messageText: string): Promise<any> {

    const data = {
      channel: '@' + userID,
      text: messageText
    };
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/chat.postMessage`, {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Send Message
   * Channel
   */
  async sendChannelMessage(channelId: string, messageText: string): Promise<any> {

    const data = {
      channel: '#' + channelId,
      text: messageText
    };
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/chat.postMessage`, {
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
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Get Channel Moderator
   * Channel
   */
  async setMessageUnread(chatId): Promise<any> {
    try {
      const response = await fetch(`https://chat10.material-exchange.com/api/v1/subscriptions.read`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Accept: '*/*',
          'X-Auth-Token': this.token,  // instert token from cookie
          'X-User-Id': this.userId, // instert userId from cookie
        },
        body: JSON.stringify({
          'rid': chatId
        })
      });
      const resToJson = await response.json();
      return resToJson;
    } catch (error) {
      console.log(error.message);
    }
  }

}
