import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptwooneComponent } from './comptwoone.component';

describe('ComptwooneComponent', () => {
  let component: ComptwooneComponent;
  let fixture: ComponentFixture<ComptwooneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptwooneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptwooneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
