import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponeoneComponent } from './componeone.component';

describe('ComponeoneComponent', () => {
  let component: ComponeoneComponent;
  let fixture: ComponentFixture<ComponeoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponeoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
