import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancepartnersComponent } from './francepartners.component';

describe('FrancepartnersComponent', () => {
  let component: FrancepartnersComponent;
  let fixture: ComponentFixture<FrancepartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrancepartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrancepartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
