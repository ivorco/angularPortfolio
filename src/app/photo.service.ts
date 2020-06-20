// https://www.publicalbum.org/blog/embedding-google-photos-albums

import { Injectable } from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';

export type Photo = {
  public_id: string;
  version: number;
  format: string;
  width: number;
  height: number;
  type: string;
  created_at: string;
};

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private cloudinary: Cloudinary) {}

  async getPhotos(): Promise<Photo[]> {
    // instead of maintaining the list of images, we rely on the 'photo' tag
    // and simply retrieve a list of all images with that tag.
    const url = this.cloudinary.url('photo', {
      format: 'json',
      type: 'list',
      // cache bust (lists are cached by the CDN for 1 minute)
      // *************************************************************************
      // Note that this is practice is DISCOURAGED in production code and is here
      // for demonstration purposes only
      // *************************************************************************
      version: Math.ceil(new Date().getTime() / 1000),
    });

    return await fetch(url)
      .then((response) => response.json())
      .then((data) => data.resources);
  }
}
