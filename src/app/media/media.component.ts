import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';
import { Media } from '../media';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor(public mediaservice: MediaService, public router: Router) { }

  username = localStorage.getItem('access');

  response0 : Media [] = [];
  response1 : Media [] = [];
  response2 : Media [] = [];
  response3 : Media [] = [];
  response4 : Media [] = [];
  response5 : Media [] = [];
  response6 : Media [] = [];
  response7 : Media [] = [];
  response8 : Media [] = [];
  response9 : Media [] = [];

  ngOnInit() {
    this.mediaservice.getMedia().subscribe(photos => {
      this.response0 = photos[0];
      this.response1 = photos[1];
      this.response2 = photos[2];
      this.response3 = photos[3];
      this.response4 = photos[4];
      this.response5 = photos[5];
      this.response6 = photos[6];
      this.response7 = photos[7];
      this.response8 = photos[8];
      this.response9 = photos[9];
  });
  }

  submit(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
