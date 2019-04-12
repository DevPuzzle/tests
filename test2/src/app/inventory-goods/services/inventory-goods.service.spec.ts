import { TestBed } from '@angular/core/testing';

import { InventoryGoodsService } from './inventory-goods.service';

describe('InventoryGoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryGoodsService = TestBed.get(InventoryGoodsService);
    expect(service).toBeTruthy();
  });
});
