import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(
    private http: HttpClient,
    // public authService: AuthService,
    private cookieService: CookieService,
    public router: Router
  ) {
  }

  async logMeIn(): Promise<object> {
    const host = 'https://library-master.material-exchange.com:443';
    const loginUrl = host + '/Windchill/servlet/rest/meapi/user/getUserData';
    const securityCheck = host + '/Windchill/rfa/jsp/login/j_security_check';
    const csrfUrl = host + '/Windchill/servlet/rest/security/csrf';
    const eventsUrl = 'https://library-master.material-exchange.com:443/Windchill/servlet/rest/meapi/company/getActiveShows';

    try {
      const response = this.http.get(loginUrl,
        {
          withCredentials: true
        })
        .subscribe(
          (res) => {
            console.log('getUserData response:', res);
            const csrfToken = this.http.get(csrfUrl, {
              withCredentials: true
            }).subscribe(
              (csrfres) => {
                console.log('CSRF data response:', csrfres);
                const csrfResponse = csrfres;
                // tslint:disable-next-line:no-string-literal
                this.cookieService.set('CSRF_NONCE', csrfResponse['items'][0]['attributes']['nonce']);
                // const self = this;
                // const headers = new Headers({
                //   'Content-Type': 'application/json',
                //   'CSRF_NONCE': csrfResponse['items'][0]['attributes']['nonce']
                // });
                // const options = new RequestOptions({headers: headers, withCredentials: true});

                let headers = new HttpHeaders({
                  'Content-Type': 'application/json',
                  'CSRF_NONCE': csrfResponse['items'][0]['attributes']['nonce']
                });
                const options = {
                  headers: headers
                };

                const events = this.http.post(eventsUrl, "ONGOING", options)
                  .subscribe(
                    (eventRes) => {
                      console.log('Event response: ', eventRes);
                    },
                    (eventErr) => {
                      console.log('Event response: ', eventErr);
                    }
                  );
              },
              (csrferr) => {
                console.log('CSRF data error:', csrferr);
              }
            );
          },
          (error) => {
            console.log('getUserData error:', error);
          }
        );
      // console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(val => this.isLoggedIn = true)
  //   );
  // }


  logout(): void {
    this.isLoggedIn = false;
  }
}
