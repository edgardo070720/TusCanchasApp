import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCanchasDeportivasComponent } from './consultar-canchas-deportivas.component';

describe('ConsultarCanchasDeportivasComponent', () => {
  let component: ConsultarCanchasDeportivasComponent;
  let fixture: ComponentFixture<ConsultarCanchasDeportivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCanchasDeportivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarCanchasDeportivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
