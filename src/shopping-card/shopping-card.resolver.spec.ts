import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCardResolver } from './shopping-card.resolver';
import { ShoppingCardService } from './shopping-card.service';

describe('ShoppingCardResolver', () => {
  let resolver: ShoppingCardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingCardResolver, ShoppingCardService],
    }).compile();

    resolver = module.get<ShoppingCardResolver>(ShoppingCardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
