import { TestBed } from '@angular/core/testing';

import { ThingieverseService } from './thingieverse.service';

describe('ThingieverseService', () => {
  let service: ThingieverseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThingieverseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
