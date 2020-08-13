import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsdetailsComponent } from './lessonsdetails.component';

describe('LessonsdetailsComponent', () => {
  let component: LessonsdetailsComponent;
  let fixture: ComponentFixture<LessonsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
