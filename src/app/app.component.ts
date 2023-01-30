import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assessment';

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigateByUrl('login');
    }
  }
}
