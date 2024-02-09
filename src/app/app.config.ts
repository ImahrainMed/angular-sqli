import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RedditBlogComponent } from './reddit-blog/reddit-blog.component'; 
import { HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()), provideAnimationsAsync(),
    
  ],
  
};


