import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActressCastingComponent } from './actress-casting.component';

describe('ActressCastingComponent', () => {
  let component: ActressCastingComponent;
  let fixture: ComponentFixture<ActressCastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActressCastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActressCastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
