import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GitServiceService } from '../service/git-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchKey: string;
  @Output() onsearch: EventEmitter<any> = new EventEmitter();
  constructor(public gitService: GitServiceService) { }
  totalResults = 0;
  ngOnInit() {
  }

  searchUserOnEnter(searchKey) {
    if (searchKey) {
      this.gitService.getUsersBySearch(searchKey)
        .subscribe(res => {
          this.totalResults = res.total_count;
          this.onsearch.emit(res.items);
        }, err => {
          console.log(err);
        });
    }
  }
}
