import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import Markdown from 'markdown-it';
import hljs from 'highlight.js';
import {parse} from '../../../../../scripts/formatMd.js';
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
  mdName: string;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((params) => this.mdName = params.get('blogId'));
  }

  getMd() {
    this.http.get(`blogs/${this.mdName}`, {responseType: 'text'})
      .subscribe(res => {
        const formatContent = parse(res);
        const content = formatContent.title ? `# ${formatContent.title} ${formatContent._content}` : formatContent._content;
        this.md2Html = this.md.render(content);
      });
  }
  ngOnInit() {
    this.getMd();
  }

}
