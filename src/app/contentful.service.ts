import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Product } from './product';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const CONFIG = {
  space: 'e5dhqnjmesqg',
  accessToken: 'QEyNoiKfu4h2Vs8hQDEaPUiIbBGVOhgcQm5hXIcbtW4',

  contentTypeIds: {
    photo: 'photos',
    product: 'product',
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

    return ret.then((res) => {
      return res.map((entry: any) => entry.fields.photo.fields.file.url);
    });
  }

  getProducts(query?: object): Promise<Product[]> {
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

    return ret.then((res) => {
      return res.map((entry: any) => {
        const product: Product = {
          title: entry.fields.name,
          type: entry.fields.type,
          imageUrl: entry.fields.mainPhoto.fields.file.url,
          imageAlt: entry.fields.name,
          description: documentToHtmlString(entry.fields.description),
        };
        return product;
      });
    });
  }
}
