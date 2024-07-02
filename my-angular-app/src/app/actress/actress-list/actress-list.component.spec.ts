import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActressListComponent } from './actress-list.component';

describe('ActressListComponent', () => {
  let component: ActressListComponent;
  let fixture: ComponentFixture<ActressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActressListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
