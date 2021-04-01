import { Component, OnInit } from '@angular/core';
import { Article } from '../entities/article';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }
  articles: Article[];

  ngOnInit() {
    this.apiService.getArticles(10, 1).subscribe(
      (value) => {
        this.articles = value,
        (error) => {
          console.error(error);
        }
    });
  }

}
