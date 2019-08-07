import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git-app';
  gitUsers: any = [];
  onsearch($event) {
    this.gitUsers = $event;
    console.log($event);
  }
}
