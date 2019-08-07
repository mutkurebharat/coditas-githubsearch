import { Component, OnInit, Input } from '@angular/core';
import { GitServiceService } from '../service/git-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() gitUser: any = {};
  constructor(private gitService: GitServiceService) { }
  repos: any;
  onSamePage = false;
  isCollapsed = false;
  ngOnInit() { }
  getUserRepos() {
    if (!this.onSamePage && !this.isCollapsed) {
      this.gitService.getAny(this.gitUser.repos_url)
        .subscribe(res => {
          console.log(res);
          this.repos = res;
          this.onSamePage = true;
          this.isCollapsed = true;
        });
    } else {
      this.isCollapsed = (this.isCollapsed) ? false : true;
    }
  }
}
