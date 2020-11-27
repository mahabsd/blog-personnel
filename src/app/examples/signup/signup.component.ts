import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'app/services/form.service';

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
    constructor(private myService: FormService) { }
    profile = {
        userName: '',
        email: '',
        password:'' ,
        description: '',
        title: ''
    }
    ngOnInit() {
        this.profile = this.myService.getProfile()
        console.log(this.profile);
    }

    update(user) {
        this.myService.updateProfile(user)
        this.updated = true
       // this.route.navigateByUrl("/child2");
      }
    

 
}
