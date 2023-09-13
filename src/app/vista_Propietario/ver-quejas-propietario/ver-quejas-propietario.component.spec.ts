import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerQuejasPropietarioComponent } from './ver-quejas-propietario.component';

describe('VerQuejasPropietarioComponent', () => {
  let component: VerQuejasPropietarioComponent;
  let fixture: ComponentFixture<VerQuejasPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerQuejasPropietarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerQuejasPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
