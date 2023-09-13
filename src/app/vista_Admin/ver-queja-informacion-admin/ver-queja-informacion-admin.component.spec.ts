import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerQuejaInformacionAdminComponent } from './ver-queja-informacion-admin.component';

describe('VerQuejaInformacionAdminComponent', () => {
  let component: VerQuejaInformacionAdminComponent;
  let fixture: ComponentFixture<VerQuejaInformacionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerQuejaInformacionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerQuejaInformacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
