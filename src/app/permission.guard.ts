import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate{


  constructor(private auth: AuthService,
    private router: Router) {

    }

  canActivate(): boolean {
    if(this.auth.loggedIn()) {
      if(localStorage.getItem('permission') === 'no_access') {
        return false;
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
