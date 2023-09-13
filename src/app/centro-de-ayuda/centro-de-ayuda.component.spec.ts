import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeAyudaComponent } from './centro-de-ayuda.component';

describe('CentroDeAyudaComponent', () => {
  let component: CentroDeAyudaComponent;
  let fixture: ComponentFixture<CentroDeAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroDeAyudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroDeAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
