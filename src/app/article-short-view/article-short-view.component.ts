import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../entities/article';

@Component({
  selector: 'app-article-short-view',
  templateUrl: './article-short-view.component.html',
  styleUrls: ['./article-short-view.component.scss']
})
export class ArticleShortViewComponent implements OnInit {

  constructor() { }
  @Input() article: Article;
  ngOnInit() {
  }

}
