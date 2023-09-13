import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejasOreclamosComponent } from './quejas-oreclamos.component';

describe('QuejasOreclamosComponent', () => {
  let component: QuejasOreclamosComponent;
  let fixture: ComponentFixture<QuejasOreclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuejasOreclamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuejasOreclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
