import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3PrintsComponent } from './d3-prints.component';

describe('D3PrintsComponent', () => {
  let component: D3PrintsComponent;
  let fixture: ComponentFixture<D3PrintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3PrintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3PrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
