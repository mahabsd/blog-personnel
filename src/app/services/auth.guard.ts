import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardserviceService } from './guardservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(public auth: GuardserviceService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['localhost:4200']);
      return false;
    }
    return true;
  }
}