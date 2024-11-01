import { Module } from '@nestjs/common';
import { HwanvisController } from './hwanvis.controller';
import { GptService } from 'src/gpt/gpt.service';

@Module({
  controllers: [HwanvisController],
  providers: [
    {
      provide: 'AiService',
      useClass: GptService,
    },
  ],
})
export class HwanvisModule {}
