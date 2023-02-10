import { Component, OnInit } from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  myposts: Post[] = [
    {title: 'C# Language', thought: 'C# language is a great language.'},
    {title: 'DevBuild Instructors', thought: 'Both Jeff and Antonio have been awesome instructors!'},
    {title: 'Final Project', thought: 'The final project is going to be very interesting.'}
  ]

  thetitle: string ='';
  thethought: string ='';

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.myposts.push({title:this.thetitle, thought:this.thethought});
  }
}
