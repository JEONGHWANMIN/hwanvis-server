import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreatePromptDto } from './dtos/CreatePromptDto';
import { AiServiceInterface } from './AiServiceInterface';

@Controller('hwanvis')
export class HwanvisController {
  constructor(
    @Inject('AiService') private readonly aiService: AiServiceInterface,
  ) {}

  @Post('/')
  async createPrompt(@Body() createPromptDto: CreatePromptDto) {
    return await this.aiService.createPrompt(createPromptDto);
  }
}
