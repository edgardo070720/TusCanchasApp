import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPropietarioComponent } from './inicio-propietario.component';

describe('InicioPropietarioComponent', () => {
  let component: InicioPropietarioComponent;
  let fixture: ComponentFixture<InicioPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
