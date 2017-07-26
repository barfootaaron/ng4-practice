import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  comments:Comment[];

  constructor(private dataService:DataService) {
    console.log('about constructor ran..') 
  };

  ngOnInit() {
    this.dataService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
  }

}

interface Comment{
  id: number,
  name: string,
  email: string,
  body: string,
  userId: number
}
