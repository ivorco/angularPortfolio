import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Product[] {
    return [
      {
        id: 1,
        title: 'HEDRON',
        type: 'Bicycle light',
        description: 'The HEDRON bicycle light',
        imageUrl:
          'https://res.cloudinary.com/dwoudrcna/image/upload/v1592341098/products/DSC01472.JPG_euemlu.jpg',
        imageAlt: 'Bicycle light',
      },
      {
        id: 2,
        title: 'LAVE',
        type: 'MIDI controller',
        description: 'The LAVE MIDI controller',
        imageUrl:
          'https://res.cloudinary.com/dwoudrcna/image/upload/v1592341086/products/6_New_Enclosure.JPG_zz0uzp.jpg',
        imageAlt: 'MIDI controller',
      },
      {
        id: 3,
        title: 'Soldering fume fan',
        type: 'Electronics',
        description: 'A soldering fume fan',
        imageUrl:
          'https://res.cloudinary.com/dwoudrcna/image/upload/v1592341091/products/DSC02450.JPG_bhh4px.jpg',
        imageAlt: 'Soldering fume fan',
      },
    ];
  }
}
