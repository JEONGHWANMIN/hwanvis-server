import { CreatePromptDto } from './dtos/CreatePromptDto';

export interface AiServiceInterface {
  createPrompt(createPromptDto: CreatePromptDto): any;
}
