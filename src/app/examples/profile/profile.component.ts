import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GuardserviceService } from 'app/services/guardservice.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    profiles: any;

    constructor(private AuthServices: GuardserviceService, private rou : Router) { }
    submited = false;
    ngOnInit() {
        this.profiles = this.AuthServices.getProfile()

     }
    profile = {
        userName: '',
        email: '',
        password:'' ,
        description: '',
        title: ''
    }

    onSubmit() {

        this.submited = true;

      if (this.AuthServices.login(this.profile)) {
      //  this.formService.addUsers(this.registrationForm.value);
        localStorage.setItem('loggeduser',JSON.stringify(this.profile));
        this.rou.navigateByUrl("/signup");
  
      } else { console.log("mdp incorrect"); }
  
    }

}
