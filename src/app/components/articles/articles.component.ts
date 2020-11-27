import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles = []
  article = {
    titre:'' ,
    image:'' ,
    date: '',
    contenu: '',
  }
  id = this.router.snapshot.paramMap.get('index');
  constructor(private router: ActivatedRoute,  private route:Router, private myService : ArticlesService) { }
  show = true;
  admin = true;
  img;
  ngOnInit(): void {
    this.articles = this.myService.getJournal()

    console.log(this.articles);
    this.article = {
      titre: this.articles[this.id].titre,
      image: this.articles[this.id].image,
      date: this.articles[this.id].date,
      contenu: this.articles[this.id].contenu,
    }
    console.log(this.id);
    
    console.log(this.article.image);
    
  }
  update(article) {
    var i = this.id
    const x = this.img.slice(12);
    this.article.image = "./assets/img/" + x;
    this.img =  this.article.image
    console.log(this.article.image);
    this.myService.updateArticle(i, article);
   // this.route.navigateByUrl("/child2");

  }
  delete() {
    var i = this.id
    this.myService.deleteArticle(i) 
    this.route.navigateByUrl("/home");

  }
}
