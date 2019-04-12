import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGoodsDetailsComponent } from './inventory-goods-details.component';

describe('InventoryGoodsDetailsComponent', () => {
  let component: InventoryGoodsDetailsComponent;
  let fixture: ComponentFixture<InventoryGoodsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryGoodsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryGoodsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
