import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBookComponent } from './school-book.component';

describe('SchoolBookComponent', () => {
  let component: SchoolBookComponent;
  let fixture: ComponentFixture<SchoolBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
