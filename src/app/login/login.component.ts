import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUrl = '/login';

  constructor(
    private http: HttpClient,
  ) {
  }

  totalAngularPackages;
  title = 'MaterialExchange - Login';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('', '');


  formSubmit(): void {
    const userData = {
      user: this.userModel.name,
      password: this.userModel.password
    };
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
    // this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
    //   this.totalAngularPackages = data.total;
    //   console.log(data);
    // });
  }

}
