import { Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit {

  posts: Observable<{
    name: string;
    comment: string;
  }[]>;

  post: BulletinField;

  baseUrl = 'https://firestore.googleapis.com';
  constructor(private http: HttpClient) {
    this.posts = this.getPosts();
    this.post = new BulletinField();
    this.post.name = {stringValue: ''};
    this.post.comment = {stringValue: ''};
  }

  ngOnInit() {
  }

  convert(resource: BulletinResource) {
    const field = resource.fields;
    return {name: field.name.stringValue, comment: field.comment.stringValue };
  }

  getPosts(): Observable<any> {
    const header = {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    };
    return this.http.jsonp(this.baseUrl + '/v1beta1/projects/seo-wedding/databases/(default)/documents/bulletin', 'callback').pipe(
      map((res) => <BulletinResource[]>res['documents'].sort(
        (a, b) => {
          const dateA = Date.parse(a.createTime);
          const dateB = Date.parse(b.createTime);
          if (dateA < dateB) {
            return 1;
          } else if (dateA > dateB) {
            return -1;
          }
          return 0;
        }
      ).map(this.convert))
    );
  }

  writePost() {
    console.log(this.post);
    if (this.post.name.stringValue === ''
    || this.post.comment.stringValue === '') {
      return;
    }
    this.http.post('/v1beta1/projects/seo-wedding/databases/(default)/documents/bulletin', JSON.stringify({fields: this.post})).subscribe(
      (res) => {
        this.posts = this.getPosts();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

class BulletinField {
  name: {
    stringValue: string;
  };
  comment: {
    stringValue: string;
  };
}
interface BulletinResource {
  name: string;
  fields: BulletinField;
  createTime: string;
  updateTime: string;
}
