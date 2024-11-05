import { Module } from '@nestjs/common';
import { HwanvisModule } from './hwanvis/hwanvis.module';
import { GptModule } from './gpt/gpt.module';

@Module({
  imports: [HwanvisModule, GptModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
