import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastUpdate = new Date();

  posts = [
      {
        titre : 'Mon premier Post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        loveIts: 0,
        created_at: this.lastUpdate
      },
       {
        titre : 'Mon deuxieme Post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        loveIts: 0,
        created_at: this.lastUpdate
      },
       {
        titre : 'Mon troisieme Post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        loveIts: 0,
        created_at: this.lastUpdate
      }
    ];
}
