import { CreatePromptDto } from './dtos/CreatePromptDto';
import { PromptResponse } from './dtos/PromptResponse';

export interface AiServiceInterface {
  createPrompt(createPromptDto: CreatePromptDto): Promise<PromptResponse>;
}
