import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCriarSalaComponent } from './form-criar-sala.component';

describe('FormCriarSalaComponent', () => {
  let component: FormCriarSalaComponent;
  let fixture: ComponentFixture<FormCriarSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCriarSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCriarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
