import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGoodComponent } from './inventory-good.component';

describe('InventoryGoodComponent', () => {
  let component: InventoryGoodComponent;
  let fixture: ComponentFixture<InventoryGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
