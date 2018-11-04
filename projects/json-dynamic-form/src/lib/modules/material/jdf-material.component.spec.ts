import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdfMaterialComponent } from './jdf-material.component';

describe('JsonDynamicFormComponent', () => {
  let component: JdfMaterialComponent;
  let fixture: ComponentFixture<JdfMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdfMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdfMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
