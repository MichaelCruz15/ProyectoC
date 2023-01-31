import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUsuarioComponent } from './Usuario-cliente.component';

describe('AgregarClienteComponent', () => {
  let component: AgregarUsuarioComponent;
  let fixture: ComponentFixture<AgregarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
