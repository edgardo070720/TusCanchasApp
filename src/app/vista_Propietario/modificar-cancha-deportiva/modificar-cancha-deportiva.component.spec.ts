import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCanchaDeportivaComponent } from './modificar-cancha-deportiva.component';

describe('ModificarCanchaDeportivaComponent', () => {
  let component: ModificarCanchaDeportivaComponent;
  let fixture: ComponentFixture<ModificarCanchaDeportivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCanchaDeportivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarCanchaDeportivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
