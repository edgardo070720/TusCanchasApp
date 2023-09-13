import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarInformacionPropietarioComponent } from './modificar-informacion-propietario.component';

describe('ModificarInformacionPropietarioComponent', () => {
  let component: ModificarInformacionPropietarioComponent;
  let fixture: ComponentFixture<ModificarInformacionPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarInformacionPropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarInformacionPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
