import { Test, TestingModule } from '@nestjs/testing';
import { TableorderService } from './tableorder.service';

describe('TableorderService', () => {
  let service: TableorderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableorderService],
    }).compile();

    service = module.get<TableorderService>(TableorderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
