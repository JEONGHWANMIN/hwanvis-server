import { Module } from '@nestjs/common';
import { AnthropicService } from './anthropic.service';

@Module({
  controllers: [],
  providers: [AnthropicService],
})
export class AnthropicModule {}
