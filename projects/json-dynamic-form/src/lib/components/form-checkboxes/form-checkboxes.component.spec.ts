import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxesComponent } from './form-checkboxes.component';

describe('FormCheckboxesComponent', () => {
  let component: FormCheckboxesComponent;
  let fixture: ComponentFixture<FormCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
