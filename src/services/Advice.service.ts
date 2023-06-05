import { Api } from '../providers/Api';

export interface IAdvice {
  slip: {
    id: number;
    advice: string;
  };
}

function getAdvice() {
  return Api.get<IAdvice>('/advice');
}

export const AdviceService = {
  getAdvice,
};
