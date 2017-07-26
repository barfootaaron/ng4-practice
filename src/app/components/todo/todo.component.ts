import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todos[];

  constructor(private dataService:DataService) {
    console.log('todo constructor ran..') 
  };

  ngOnInit() {
    this.dataService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

}

interface Todos{
  id: number,
  title: string,
  completed: boolean
}
