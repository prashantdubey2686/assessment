import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formgroup: FormGroup | any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.formgroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginproces() {
    if (this.formgroup.valid) {
      this.authService.login(this.formgroup.value).subscribe(result => {
        if (result.is_success) {
          this.authService.setToken(result.data.token);
          this.router.navigate(['movie']);
        }
      },
      error => {
        console.log(error);
        alert(error);
      })
    }
  }

}
