import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../entities/article';
import { ApiServiceService } from '../services/api-service.service';

declare var require: any;
const Quill = require('src/assets/quill/quill.js');

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articleId: string;
  article: Article;
  quillObj: any;
  quillControl: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiServiceService
  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.articleId = params.get('articleId');
    });

    this.article = await this.api.getArticle(this.articleId).toPromise();
    

    let quillOptions = {
      debug: 'info',
      modules: {
        toolbar: false,
        history: {
          delay: 2000,
          maxStack: 500,
          userOnly: true
        },
        syntax: true,
      },
      placeholder: 'Compose an epic...',
      readOnly: true,
      theme: 'snow'
    }
    this.quillObj = new Quill("#article-container", quillOptions);
    this.quillControl = this.getQuillControll();
    this.setQuillContent()
  }
  
  setQuillContent() {
    this.quillControl.__quill.setContents(JSON.parse(this.article.contentJson), 'api')

  }

  getQuillControll() {
    return document.getElementById("article-container");
  }
}


