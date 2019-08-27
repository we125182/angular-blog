import { Component, OnInit } from '@angular/core';
import { mdList, lastArticle } from 'blogs';
import { Article } from '../../../public/interface';
import { getDescFromMd } from '../../../public/utils';

@Component({
  selector: 'jd-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mdList: Array<Article> = mdList;
  latestArticle: Article = lastArticle;

  constructor() {
  }

  ngOnInit() {
    this.latestArticle.desc = getDescFromMd(this.latestArticle._content);
  }
}
