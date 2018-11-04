import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdfBootstrapComponent } from './jdf-bootstrap.component';

describe('JsonDynamicFormComponent', () => {
  let component: JdfBootstrapComponent;
  let fixture: ComponentFixture<JdfBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdfBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdfBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
