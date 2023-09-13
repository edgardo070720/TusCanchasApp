import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCanchaDeportivaComponent } from './reserva-cancha-deportiva.component';

describe('ReservaCanchaDeportivaComponent', () => {
  let component: ReservaCanchaDeportivaComponent;
  let fixture: ComponentFixture<ReservaCanchaDeportivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaCanchaDeportivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaCanchaDeportivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
