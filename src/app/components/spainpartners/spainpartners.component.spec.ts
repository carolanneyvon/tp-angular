import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainpartnersComponent } from './spainpartners.component';

describe('SpainpartnersComponent', () => {
  let component: SpainpartnersComponent;
  let fixture: ComponentFixture<SpainpartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpainpartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpainpartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
