import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGoodsListComponent } from './inventory-goods-list.component';

describe('InventoryGoodsListComponent', () => {
  let component: InventoryGoodsListComponent;
  let fixture: ComponentFixture<InventoryGoodsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryGoodsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryGoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
