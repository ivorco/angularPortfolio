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
        imageUrl: 'https://lh3.googleusercontent.com/oo8ke0XLGVk0UaskI8LD4GnXoesQUh6VRoQY5t2N78ULCGP6wQzUbDvB_raVfSw5TzvFKCsjNU8vIXVuGs1_cUhKLYTBN8DHK75QJHSvusNItmnuEzyxvxvQ2o3yC4KuGNmzxKs-bA=w1920-h1080',
        imageAlt: 'Bicycle light',
      },
      {
        id: 2,
        title: 'LAVE',
        type: 'MIDI controller',
        description: 'The LAVE MIDI controller',
        imageUrl: 'https://lh3.googleusercontent.com/u3CB3MWkOltxy2-7gfKWsuB7JSE7p_mHeX9tSCzr1Sbq07U4K_58VbLJitsIPfW_YJjrhbjLC6NrLP0loSFWwjx9XT8BVXrjcpc6sZuUltEStBp9meD6AzDVZnhd3_ShTeKJBhzeAQ=w1920-h1080',
        imageAlt: 'MIDI controller',
      },
      {
        id: 3,
        title: 'Soldering fume fan',
        type: 'Electronics',
        description: 'A soldering fume fan',
        imageUrl: 'https://lh3.googleusercontent.com/znerP1uUvna178SNaaEWfYBbUyVSbdh9rorseqXF4JyvAkschWY9iRiWaFmjuAv_A2nlC6tB-GHCVTscmCHYFmoggj_qOKvMZl7QCmltRib9szvAxyH8bRV-sKCs-_-6YLk46TptZg=w1920-h1080',
        imageAlt: 'Soldering fume fan',
      },
    ];
  }
}