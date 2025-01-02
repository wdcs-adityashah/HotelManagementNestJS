import { Test, TestingModule } from '@nestjs/testing';
import { SocketappService } from './socketapp.service';

describe('SocketappService', () => {
  let service: SocketappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocketappService],
    }).compile();

    service = module.get<SocketappService>(SocketappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
