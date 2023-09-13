import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCanchasDeportivasTotalesComponent } from './ver-canchas-deportivas-totales.component';

describe('VerCanchasDeportivasTotalesComponent', () => {
  let component: VerCanchasDeportivasTotalesComponent;
  let fixture: ComponentFixture<VerCanchasDeportivasTotalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCanchasDeportivasTotalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCanchasDeportivasTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
