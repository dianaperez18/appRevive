import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionSeleccionadaComponent } from './opcion-seleccionada.component';

describe('OpcionSeleccionadaComponent', () => {
  let component: OpcionSeleccionadaComponent;
  let fixture: ComponentFixture<OpcionSeleccionadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionSeleccionadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionSeleccionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
