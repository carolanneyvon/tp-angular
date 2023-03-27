import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanypartnersComponent } from './germanypartners.component';

describe('GermanypartnersComponent', () => {
  let component: GermanypartnersComponent;
  let fixture: ComponentFixture<GermanypartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanypartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanypartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
