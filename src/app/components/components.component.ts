import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesService } from 'app/services/articles.service';
import { FormService } from 'app/services/form.service';
import { GuardserviceService } from 'app/services/guardservice.service';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    .center {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    `]
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    submited = false;
    profile;
    getProfileIntro;
    articles = []
    article;
    isAuthenticated;
    id = this.router.snapshot.paramMap.get('index');
    constructor(private renderer: Renderer2, private AuthServices: GuardserviceService, private rou: Router, private router: ActivatedRoute, private formService: FormService,
        private articleService: ArticlesService, private route: ActivatedRoute) {
            this.isAuthenticated = AuthServices.isAuthenticated();
        console.log('this.isAuthenticated returns :' + this.isAuthenticated);
        
         }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
        this.profile = {
            userName: '',
            email:  '',
            password: '',
            description:'',
            title:  ''
        }
        
        this.getProfileIntro = this.formService.getProfileIntro()


        this.article = new FormGroup({
            titre: new FormControl('' ),
            image: new FormControl(''),
            date: new FormControl(''),
            contenu: new FormControl('',)
          })




          this.articles = this.articleService.getJournal()


    }


//** -----------------------registration ------------------- */




    submitregister() {
        
    console.log(this.profile);
    this.AuthServices.register(this.profile);
    this.rou.navigateByUrl("/user-profile");
    
  }

//** -----------------------journale ------------------- */
  

    addJournal() {
      this.rou.navigateByUrl("/journal");

    }
   



    openArticle() {
        console.log("hiiii");
       ///feha fazet l i
    
    }
    i = 0;
    followersNumber(){
    this.i += 1 
    }
}

