// https://medium.com/javascript-in-plain-english/how-to-create-an-image-gallery-app-with-angular-903190015aec

import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  constructor(private photoService: PhotoService) {}

  photoUrls: string[] = [];

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.photoUrls = this.photoService.getPhotos();
  }
}
