import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { PhotoService, Photo } from '../photo.service';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let photoServiceStub: Partial<PhotoService>;
  // let photoService;

  beforeEach(async(() => {
    photoServiceStub = {
      async getPhotos(): Promise<Photo[]> {
        return [
          {
            public_id: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Msn_logo.jpg',
            version: 0,
            format: '',
            width: 100,
            height: 100,
            type: '',
            created_at: '',
          },
        ];
      },
    };

    TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      providers: [{ provide: PhotoService, useValue: photoServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    // photoService = fixture.debugElement.injector.get(PhotoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
