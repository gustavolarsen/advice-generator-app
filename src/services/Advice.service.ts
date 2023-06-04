import { Api } from '../providers/Api';

export interface IAdvice {
  slip: {
    id: number;
    advice: string;
  };
}

const getAdvice = () => Api.get<IAdvice>('/advice');

export const AdviceService = {
  getAdvice,
};
