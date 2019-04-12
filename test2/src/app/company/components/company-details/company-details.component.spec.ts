import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDETAILSComponent } from './company-details.component';

describe('CompanyDETAILSComponent', () => {
  let component: CompanyDETAILSComponent;
  let fixture: ComponentFixture<CompanyDETAILSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDETAILSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
