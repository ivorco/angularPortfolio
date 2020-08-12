import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'e5dhqnjmesqg',
  accessToken: 'QEyNoiKfu4h2Vs8hQDEaPUiIbBGVOhgcQm5hXIcbtW4',

  contentTypeIds: {
    photo: 'photos',
    product: 'products'
  },
};

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  });

  constructor() {}

  getPhotos(query?: object): Promise<Entry<any>[]> {
    const ret = this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.photo,
          },
          query
        )
      )
      .then((res) => res.items);

    return ret.then(res => {
      return res.map((entry: any) => entry.fields.photo.fields.file.url);
    });
  }

  getProducts(query?: object): Promise<Entry<any>[]> {
    const ret = this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.product,
          },
          query
        )
      )
      .then((res) => res.items);

    return ret.then(res => {
      return res.map((entry: any) => entry.fields.photo.fields.file.url);
    });
  }
}
