import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandgrandchildComponent } from './grandgrandchild.component';

describe('GrandgrandchildComponent', () => {
  let component: GrandgrandchildComponent;
  let fixture: ComponentFixture<GrandgrandchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandgrandchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandgrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
