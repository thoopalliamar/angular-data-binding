import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildfiveComponent } from './grandchildfive.component';

describe('GrandchildfiveComponent', () => {
  let component: GrandchildfiveComponent;
  let fixture: ComponentFixture<GrandchildfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandchildfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandchildfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
