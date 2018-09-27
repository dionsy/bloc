import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  lastUpdate = new Date();
  loveIts = 0;
  @Input() titre: string;
  @Input() content: string; 
    
 constructor() { }

  ngOnInit() {
  }

  onLoveIts() {
    this.loveIts ++;
  }

onNotLoveIts() {
    this.loveIts --;
  }
}
