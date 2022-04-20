import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(public http: HttpClient) { }

    getMedia(): Observable<any[]> {
      let response1 = this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos');
      let response2 = this.http.get('https://jsonplaceholder.typicode.com/albums/2/photos');
      let response3 = this.http.get('https://jsonplaceholder.typicode.com/albums/3/photos');
      let response4 = this.http.get('https://jsonplaceholder.typicode.com/albums/4/photos');
      let response5 = this.http.get('https://jsonplaceholder.typicode.com/albums/5/photos');
      let response6 = this.http.get('https://jsonplaceholder.typicode.com/albums/6/photos');
      let response7 = this.http.get('https://jsonplaceholder.typicode.com/albums/7/photos');
      let response8 = this.http.get('https://jsonplaceholder.typicode.com/albums/8/photos');
      let response9 = this.http.get('https://jsonplaceholder.typicode.com/albums/9/photos');
      let response10 = this.http.get('https://jsonplaceholder.typicode.com/albums/10/photos');
      return forkJoin([response1, response2, response3, response4, response5,
         response6, response7, response8, response9, response10])



    }

}
