import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGoodsComponent } from './inventory-goods.component';

describe('InventoryGoodsComponent', () => {
  let component: InventoryGoodsComponent;
  let fixture: ComponentFixture<InventoryGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
