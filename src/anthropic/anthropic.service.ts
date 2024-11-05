import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { AiServiceInterface } from '../hwanvis/AiServiceInterface';
import { CreatePromptDto, GptMessage } from '../hwanvis/dtos/CreatePromptDto';
import { PromptResponse } from '../hwanvis/dtos/PromptResponse';

@Injectable()
export class AnthropicService implements AiServiceInterface {
  private readonly API_URL = 'https://api.anthropic.com/v1/messages';
  private readonly API_VERSION = '2023-06-01';
  private readonly MODEL = 'claude-3-5-sonnet-20241022';
  private readonly MAX_TOKENS = 1024;

  async createPrompt(
    createPromptDto: CreatePromptDto,
  ): Promise<PromptResponse> {
    const { apiKey, messages } = createPromptDto;
    try {
      const response = await this.sendRequest(apiKey, messages);
      return {
        role: response.data?.role,
        content: response.data?.content[0]?.text,
        model: 'claude',
      };
    } catch (error) {
      console.error('Anthropic API 호출 실패:', error.response.data);
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
        max_tokens: this.MAX_TOKENS,
        messages: messages,
      },
      {
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': this.API_VERSION,
          'content-type': 'application/json',
        },
      },
    );
  }
}