import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservasAdminComponent } from './ver-reservas-admin.component';

describe('VerReservasAdminComponent', () => {
  let component: VerReservasAdminComponent;
  let fixture: ComponentFixture<VerReservasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerReservasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerReservasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
