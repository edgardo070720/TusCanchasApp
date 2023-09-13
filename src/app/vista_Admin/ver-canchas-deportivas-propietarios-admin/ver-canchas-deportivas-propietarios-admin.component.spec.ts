import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCanchasDeportivasPropietariosAdminComponent } from './ver-canchas-deportivas-propietarios-admin.component';

describe('VerCanchasDeportivasPropietariosAdminComponent', () => {
  let component: VerCanchasDeportivasPropietariosAdminComponent;
  let fixture: ComponentFixture<VerCanchasDeportivasPropietariosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCanchasDeportivasPropietariosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCanchasDeportivasPropietariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
