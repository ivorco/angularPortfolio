import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { ContentfulService } from '../contentful.service';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let contentfulServiceStub: Partial<ContentfulService>;

  beforeEach(async(() => {
    contentfulServiceStub = {
      async getPhotos(): Promise<string[]> {
        return [
          'https://upload.wikimedia.org/wikipedia/commons/a/a0/Msn_logo.jpg'
        ];
      },
    };

    TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      providers: [{ provide: ContentfulService, useValue: contentfulServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
