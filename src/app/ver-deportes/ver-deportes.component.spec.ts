import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDeportesComponent } from './ver-deportes.component';

describe('VerDeportesComponent', () => {
  let component: VerDeportesComponent;
  let fixture: ComponentFixture<VerDeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDeportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
