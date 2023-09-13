import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerQuejaInformacionPropietarioComponent } from './ver-queja-informacion-propietario.component';

describe('VerQuejaInformacionPropietarioComponent', () => {
  let component: VerQuejaInformacionPropietarioComponent;
  let fixture: ComponentFixture<VerQuejaInformacionPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerQuejaInformacionPropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerQuejaInformacionPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
