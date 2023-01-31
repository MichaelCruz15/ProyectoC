import { ComponentFixture, TestBed } from '@angular/core/testing';
import { horariosComponent } from './Horario.component';

describe('horariosComponent', () => {
  let component: horariosComponent;
  let fixture: ComponentFixture<horariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ horariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(horariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
