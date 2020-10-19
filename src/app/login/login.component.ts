import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUrl = '/login';
  message = 'status: N/A';
  logginMessage: any;

  constructor(
    private http: HttpClient,
    public authService: AuthService,
    public router: Router
  ) {
  }

  totalAngularPackages;
  title = 'MaterialExchange - Login';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('', '');

  // login(): void {
  //   this.authService.login().subscribe((res) => {
  //     if (this.authService.isLoggedIn) {
  //       const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : 'login';
  //       this.message = 'status: logged in';
  //
  //       this.router.navigateByUrl(redirect);
  //     }
  //   });
  // }
  // async logMeIn(username, password): Promise<void> {
  //
  //   this.logginMessage = await this.authService.logMeIn(username, password);
  //
  // }

  logout(): void {
    this.authService.logout();
    this.message = 'status: logged out';
  }

  async formSubmit(): Promise<void> {
    const userData = {
      j_username: this.userModel.name,
      j_password: this.userModel.password
    };
    this.logginMessage = await this.authService.logMeIn(this.userModel.name, this.userModel.password);
    // this.http.post(this.loginUrl, userData).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // this.http.get<any>('URL').subscribe(data => {
    //   this.totalAngularPackages = data.total;
    //   console.log(data);
    // });
  }


  ngOnInit(): void {
    this.logginMessage = this.authService.logMeIn(this.userModel.name, this.userModel.password);
  }

}
