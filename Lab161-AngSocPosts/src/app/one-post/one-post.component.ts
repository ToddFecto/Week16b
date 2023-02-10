import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  @Input() thepost: Post = {
    title: 'Angular Labs',
    thought: 'Angular labs a pretty cool'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
