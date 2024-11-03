import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { AiServiceInterface } from 'src/hwanvis/AiServiceInterface';
import { CreatePromptDto, GptMessage } from 'src/hwanvis/dtos/CreatePromptDto';

@Injectable()
export class GptService implements AiServiceInterface {
  private readonly API_URL = 'https://api.openai.com/v1/chat/completions';
  private readonly MODEL = 'gpt-4o';

  async createPrompt(
    createPromptDto: CreatePromptDto,
  ): Promise<AxiosResponse['data']> {
    const { apiKey, messages } = createPromptDto;
    try {
      const response = await this.sendRequest(apiKey, messages);
      return response.data?.choices[0];
    } catch (error) {
      console.error('GPT API 호출 실패:', error);
      throw new InternalServerErrorException(
        'AI 요청에 실패했습니다. 잠시 후 다시 시도해 주세요.',
      );
    }
  }

  private async sendRequest(apiKey: string, messages: GptMessage[]) {
    return axios.post(
      this.API_URL,
      {
        model: this.MODEL,
        messages: messages,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      },
    );
  }
}