import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerQuejasAdminComponent } from './ver-quejas-admin.component';

describe('VerQuejasAdminComponent', () => {
  let component: VerQuejasAdminComponent;
  let fixture: ComponentFixture<VerQuejasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerQuejasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerQuejasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
