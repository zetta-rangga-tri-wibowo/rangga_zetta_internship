import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentActiveComponent } from './student-active.component';

describe('StudentActiveComponent', () => {
  let component: StudentActiveComponent;
  let fixture: ComponentFixture<StudentActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
