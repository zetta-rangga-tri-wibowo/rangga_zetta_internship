import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RncpTitlePageComponent } from './rncp-title-page.component';

describe('RncpTitlePageComponent', () => {
  let component: RncpTitlePageComponent;
  let fixture: ComponentFixture<RncpTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RncpTitlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RncpTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
