import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
  	console.log('Data service connected...');
  }

  getPosts(){
  	return this.http.get('https://jsonplaceholder.typicode.com/posts')
  		.map(res => res.json());
  }

  getComments(){
  	return this.http.get('https://jsonplaceholder.typicode.com/comments')
  		.map(res => res.json());
  }
  
  getTodos(){
  	return this.http.get('https://jsonplaceholder.typicode.com/todos')
  		.map(res => res.json());
  }

}
