import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditBlogComponent } from './reddit-blog.component';

describe('RedditBlogComponent', () => {
  let component: RedditBlogComponent;
  let fixture: ComponentFixture<RedditBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedditBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedditBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
