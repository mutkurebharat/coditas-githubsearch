import { Component } from '@angular/core';
import { GitServiceService } from './service/git-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private gitService: GitServiceService) { }
  title = 'git-app';
  gitUsers: any = [];
  page = 0;
  count = 0;
  searchKey = '';

  onsearch($event) {
    this.gitUsers = $event.gitUsers;
    this.searchKey = $event.searchKey;
    this.count = $event.totalResults;
    console.log($event);
  }

  sortUsers($event) {
    if ($event === 'A') {
      this.gitUsers = this.gitUsers.sort((a, b) => a.login.toUpperCase().localeCompare(b.login.toUpperCase()));
    } else if ($event === 'Z') {
      this.gitUsers = this.gitUsers.sort((a, b) => b.login.toUpperCase().localeCompare(a.login.toUpperCase()));
    } else if ($event === 'higher') {
      this.gitUsers = this.gitUsers.sort((a, b) => Number(a.score) - Number(b.score));
    } else if ($event === 'lower') {
      this.gitUsers = this.gitUsers.sort((a, b) => Number(b.score) - Number(a.score));
    }
  }

  onPageChange(event) {
    console.log('dsfdsf', event);

    this.gitService.getUsersBySearch(this.searchKey, event)
      .subscribe(res => {
        console.log(res);
        this.page = event;
        this.gitUsers = res.items;
        this.count = res.total_count;
        // this.onsearch.emit({gitUsers: res.items, searchKey: this.searchKey});
      }, err => {
        console.log(err);
      });;
  }
}
