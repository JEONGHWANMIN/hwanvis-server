import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreatePromptDto } from './dtos/CreatePromptDto';
import { AiServiceInterface } from './AiServiceInterface';

@Controller('api/hwanvis')
export class HwanvisController {
  constructor(
    @Inject('AiService') private readonly aiService: AiServiceInterface,
  ) {}

  @Post('/')
  createPrompt(@Body() createPromptDto: CreatePromptDto) {
    return this.aiService.createPrompt(createPromptDto);
  }
}
