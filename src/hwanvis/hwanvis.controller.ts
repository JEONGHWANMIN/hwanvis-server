import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreatePromptDto } from './dtos/CreatePromptDto';
import { AiServiceInterface } from './AiServiceInterface';

@Controller('api/hwanvis')
export class HwanvisController {
  constructor(
    @Inject('gpt') private readonly gptService: AiServiceInterface,
    @Inject('claude') private readonly claudeService: AiServiceInterface,
  ) {}

  @Post('/')
  createPrompt(@Body() createPromptDto: CreatePromptDto) {
    if (createPromptDto.type === 'claude') {
      return this.claudeService.createPrompt(createPromptDto);
    }

    return this.gptService.createPrompt(createPromptDto);
  }
}
