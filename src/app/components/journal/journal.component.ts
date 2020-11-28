import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticlesService } from 'app/services/articles.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  admin = true;
  show = false
  article;
  journal = {
    titre: '' ,
    image:'',
    date:'',
    contenu:''
  }
img
  constructor(private articleService : ArticlesService, private imageService: ArticlesService) { }

  ngOnInit(): void {
    this.article = new FormGroup({
      title: new FormControl(''),
      img: new FormControl(''),
      time: new FormControl(''),
      description: new FormControl('',)
    })
  }
  add() {

    const x = this.journal.image.slice(12);
    this.journal.image = "./assets/img/" + x;
    console.log("artcile apres lajout" +this.journal.image);

    this.img =  this.journal.image
    console.log(this.journal.image);
    this.articleService.addArticle(this.journal)
    this.show = true

  }


/** ----------------- collect Image  ------------------ */
  

//selectedFile: ImageSnippet;
// processFile(imageInput: any) {
//   const file: File = imageInput.files[0];
//   const reader = new FileReader();

//   reader.addEventListener('load', (event: any) => {

//     this.selectedFile = new ImageSnippet(event.target.result, file);

//     this.imageService.uploadImage(this.selectedFile.file).subscribe(
//       (res) => {
      
//       },
//       (err) => {
      
//       })
//   });

//   reader.readAsDataURL(file);
// }

}
