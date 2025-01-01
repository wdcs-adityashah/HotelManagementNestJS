import { Test, TestingModule } from '@nestjs/testing';
import { TableorderController } from './tableorder.controller';

describe('TableorderController', () => {
  let controller: TableorderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableorderController],
    }).compile();

    controller = module.get<TableorderController>(TableorderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
