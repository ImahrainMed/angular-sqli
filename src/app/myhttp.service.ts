import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {
  
  private readonly http = inject(HttpClient);
  private readonly url = 'https://www.reddit.com/r/gifs/new/.json?limit=10';
  
  public getRedditData(): Observable<any> {
    return this.http.get(this.url)
  }
}
