// https://medium.com/javascript-in-plain-english/how-to-create-an-image-gallery-app-with-angular-903190015aec

import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  constructor(private contentfullService: ContentfulService) {}

  photos: string[] = [];

  ngOnInit(): void {
    this.getPhotos();
  }

  async getPhotos() {
    const images = await this.contentfullService.getPhotos();
    this.photos = images.map((image) => image.toString());
  }
}
