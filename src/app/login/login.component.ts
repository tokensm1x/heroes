import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TranslatesService } from '../translates.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loaded: boolean = false;

  constructor(private auth: AuthService,
    private router: Router,
    private translates: TranslatesService) { }

  ngOnInit(): void {
    this.translates.getTranslates().subscribe(ts => {
      this.loaded = true;
    })
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern('^[_0-9a-zA-Z ]*')
  ]);

  loginUser(): void {
    this.auth.loginUser({
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    })
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/heroes']);
      },
      err => {
        if(err.status === 401){
          if(localStorage.getItem('lang') === 'ru') {
            alert('Неправильный логин или пароль')
          } else {
            alert('Incorrect login or password')
          }
        };
        console.error(err);
      }
    );
  }
}
