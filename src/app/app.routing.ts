import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { ArticlesComponent } from "./components/articles/articles.component";
import { JournalComponent } from "./components/journal/journal.component";
import { GuardserviceService } from './services/guardservice.service';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  {
    path: 'user-profile', component: ProfileComponent
  },
  {
    path: 'signup', component: SignupComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home/article/:index', component: ArticlesComponent },
  {
    path: 'journal', component: JournalComponent,
    canActivate: [AuthGuard]

  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
