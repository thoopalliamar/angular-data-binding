import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompthreeoneComponent } from './compthreeone.component';

describe('CompthreeoneComponent', () => {
  let component: CompthreeoneComponent;
  let fixture: ComponentFixture<CompthreeoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompthreeoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompthreeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
