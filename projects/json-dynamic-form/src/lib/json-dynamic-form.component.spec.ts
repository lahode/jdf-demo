import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDynamicFormComponent } from './json-dynamic-form.component';

describe('JsonDynamicFormComponent', () => {
  let component: JsonDynamicFormComponent;
  let fixture: ComponentFixture<JsonDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
