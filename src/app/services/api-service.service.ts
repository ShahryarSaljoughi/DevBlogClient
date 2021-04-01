import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../entities/article';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  public getArticle(id: string): Observable<Article> {
    var url = `${environment.ApiBaseUrl}/Article/GetArticle?articleId=${id}`
    return this.httpClient.get<Article>(url);
  }

  public getArticles(pageSize: number, pageNo: number): Observable<Article[]> {
    var url = `${environment.ApiBaseUrl}/Article/GetArticles`;
    return this.httpClient.post<Article[]>(url, {PageSize: pageSize, PageNo: pageNo});
  }
}
