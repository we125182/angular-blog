import { Component, OnInit } from '@angular/core';
import Markdown from 'markdown-it';
import hljs from 'highlight.js';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'jd-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  md = new Markdown({
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            '</code></pre>';
        } catch (__) {}
      }

      return '<pre class="hljs"><code>' + this.md.utils.escapeHtml(str) + '</code></pre>';
    }
  });
  md2Html: any;
  constructor(
    private http: HttpClient
  ) { }

  getMd() {
    this.http.get('blogs/README.md', {responseType: 'text'})
      .subscribe(res => {
        console.log(typeof res);
        this.md2Html = this.md.render(res);
      });
  }
  ngOnInit() {
    this.getMd();
  }

}
