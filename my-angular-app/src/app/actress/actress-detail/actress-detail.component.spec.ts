import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActressDetailComponent } from './actress-detail.component';

describe('ActressDetailComponent', () => {
  let component: ActressDetailComponent;
  let fixture: ComponentFixture<ActressDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActressDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
