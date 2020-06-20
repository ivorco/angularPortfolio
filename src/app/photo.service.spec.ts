import { TestBed } from '@angular/core/testing';
import { PhotoService } from './photo.service';
import { Cloudinary } from '@cloudinary/angular-5.x';

describe('PhotoService', () => {
  let service: PhotoService;
  let cloudinarySpy: jasmine.SpyObj<Cloudinary>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Cloudinary', ['getValue']);
    TestBed.configureTestingModule({
      providers: [PhotoService, { provide: Cloudinary, useValue: spy }],
    });
    service = TestBed.inject(PhotoService);
    cloudinarySpy = TestBed.inject(Cloudinary) as jasmine.SpyObj<Cloudinary>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
