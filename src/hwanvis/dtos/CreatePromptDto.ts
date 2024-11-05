export interface GptMessage {
  role: string;
  content: string;
}

export type AiType = 'gpt' | 'claude';

export class CreatePromptDto {
  apiKey: string;
  messages: GptMessage[];
  type?: AiType;
}
