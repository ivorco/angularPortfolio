import { Injectable } from '@angular/core';
import { ThingiverseAPI } from './thingieverseAPI';

const token = '4116de78d0db1950dc70cea0f4686086';

@Injectable({
  providedIn: 'root',
})
export class ThingieverseService {
  constructor() {}

  public static getThings() {
    const thingiverseAPI = new ThingiverseAPI(token);
    thingiverseAPI.get('users/me', (err, data) => {
      console.log('you are signed in as ' + data.name);
      thingiverseAPI.get('users/' + data.name + '/things', (err2, data2) => {
        console.log('you have ' + data2.length + ' things');
      });
    });
  }
}

