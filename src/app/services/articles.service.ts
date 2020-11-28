import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  addArticle( article) {
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    articles.push(article)
    localStorage.setItem('articles',JSON.stringify(articles));
  }

  getJournal() {

    return JSON.parse(localStorage.getItem("articles")) || [];
  }
  updateArticle(i, article) {
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    articles.splice(i, 1, article);
    localStorage.setItem('articles',JSON.stringify(articles ));

  }
  deleteArticle(i){
    console.log(i);
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    articles.splice(i, 1);
    localStorage.setItem('articles',JSON.stringify(articles));
  };

}
