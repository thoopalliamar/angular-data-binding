import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsixComponent } from './parentsix.component';

describe('ParentsixComponent', () => {
  let component: ParentsixComponent;
  let fixture: ComponentFixture<ParentsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
