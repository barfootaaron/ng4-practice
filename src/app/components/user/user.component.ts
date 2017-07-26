import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	age:number;
	email:string;
	address:Address;
	hobbies:string[];
	hello:any;
  posts:Post[];
  // set isEdit to false, toggleEdit() fn below changes on each click of btn 
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('user constructor ran..') 
  };

  ngOnInit() {
  	console.log('ngOnInit ran...');

  	this.name = 'Michael Scott';
    this.email = 'a@test.edu'
  	this.age = 25;
  	this.address = {
  		street: '136 Shiaway Ct',
  		city: 'Nashville',
  		state: 'TN'
  	}
  	this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
  	this.hello = 'hello';

    
    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  changeName() {
  	this.name="Now it's Prison Mike";
  	this.hobbies.push('Ride Bike');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address{
	street:string,
	city:string,
	state:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}

