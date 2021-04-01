import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleShortViewComponent } from './article-short-view.component';

describe('ArticleShortViewComponent', () => {
  let component: ArticleShortViewComponent;
  let fixture: ComponentFixture<ArticleShortViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleShortViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleShortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
