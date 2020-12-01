import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'app/services/form.service';
import { GuardserviceService } from 'app/services/guardservice.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    updated = false;
    constructor(private myService: FormService, private guardService : GuardserviceService ) { }
    profile = {
        userName: '',
        email: '',
        password:'' ,
        description: '',
        title: ''
    }
    ngOnInit() {

        this.profile =  JSON.parse(localStorage.getItem("loggeduser")) || [];

        console.log(this.profile);
    }

    update(user) {
        var i = this.guardService.getIndex()
        this.myService.updateProfile(i, user)
        this.updated = true
       // this.route.navigateByUrl("/child2");
      }
    

 
}
