import { Module } from '@nestjs/common';
import { HwanvisController } from './hwanvis.controller';
import { GptService } from 'src/gpt/gpt.service';
import { AnthropicService } from '../anthropic/anthropic.service';

@Module({
  controllers: [HwanvisController],
  providers: [
    {
      provide: 'gpt',
      useClass: GptService,
    },
    {
      provide: 'claude',
      useClass: AnthropicService,
    },
  ],
})
export class HwanvisModule {}
