import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')

    });
  }

  connect(formValue: { login: string, password: string }) {
    if (formValue.login && formValue.password) {
      // call login API
      this.auth.connect(formValue).subscribe(v => {
        localStorage.setItem('LoginToken', v.token);
        this.router.navigate(['home']);
      }, () => {
        // manage error
        console.log('error');

      });
    } else {
      console.log('donnée incorrecte');
    }
  }
}
