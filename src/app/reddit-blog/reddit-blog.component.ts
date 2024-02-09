import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MyhttpService } from '../myhttp.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';


@Component({
  selector: 'app-reddit-blog',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatButtonModule, MatChipListbox, MatChipOption],
  templateUrl: './reddit-blog.component.html',
  styleUrl: './reddit-blog.component.scss'
})
export class RedditBlogComponent implements OnInit {
  
  private readonly myService = inject(MyhttpService);
  results: [];
  isSmallScreen: boolean;

  constructor(private breakPointObserver: BreakpointObserver) {
    this.results = [];
    this.isSmallScreen = false;
    this.breakPointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).
    subscribe((result) => {
      this.isSmallScreen = result.matches
    });
  }

  getBlogs() {
    this.myService.getRedditData().
    subscribe((data) => {
      this.results = data['data']['children'];
      console.log(data['data']['children']);
      
    })
  }

  ngOnInit(): void {
      this.getBlogs()
  }
}
