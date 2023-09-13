import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCanchasDeportivasComponent } from './registro-canchas-deportivas.component';

describe('RegistroCanchasDeportivasComponent', () => {
  let component: RegistroCanchasDeportivasComponent;
  let fixture: ComponentFixture<RegistroCanchasDeportivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCanchasDeportivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroCanchasDeportivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
