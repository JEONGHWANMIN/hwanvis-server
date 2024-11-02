export interface GptMessage {
  role: string;
  content: string;
}

export class CreatePromptDto {
  apiKey: string;
  messages: GptMessage[];
}
