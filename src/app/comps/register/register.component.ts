import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hide = true;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
      title: new FormControl(''),
      passwordConfirm: new FormControl('')

    });
  }


  register(formValue: { title: string, login: string, password: string, passwordConfirm: string }) {
    console.log(formValue);
    if (formValue.login && formValue.password && formValue.title && formValue.passwordConfirm) {
      if (formValue.passwordConfirm === formValue.password) {
        // call login API
        this.auth.register({ title: formValue.title, login: formValue.login, password: formValue.password }).subscribe(v => {
          console.log(v);
          this.router.navigate(['login']);
        }, () => {
          // manage error
          console.log('error');

        });
      } else {
        console.log('password not matching')
      }

    } else {
      console.log('donnée incorrecte');
    }
  }
}
