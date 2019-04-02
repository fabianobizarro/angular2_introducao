import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarSalaComponent } from './form-editar-sala.component';

describe('FormEditarSalaComponent', () => {
  let component: FormEditarSalaComponent;
  let fixture: ComponentFixture<FormEditarSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditarSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
