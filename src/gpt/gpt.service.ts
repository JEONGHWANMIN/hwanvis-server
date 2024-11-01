import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AiServiceInterface } from 'src/hwanvis/AiServiceInterface';
import { CreatePromptDto } from 'src/hwanvis/dtos/CreatePromptDto';

@Injectable()
export class GptService implements AiServiceInterface {
  async createPrompt(createPromptDto: CreatePromptDto) {
    const { apiKey, messages } = createPromptDto;
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o',
          messages: messages,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
