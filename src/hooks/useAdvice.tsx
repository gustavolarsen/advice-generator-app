import { useState, useEffect } from 'react';
import { fetchAdvice } from '../services/AdviceService';

type TAdviceType = {
  id: number;
  advice: string;
};

export const useAdvice = () => {
  const [advice, setAdvice] = useState<TAdviceType>();

  const getAdvice = async () => {
    try {
      const data = await fetchAdvice();
      setAdvice({
        id: data.slip.id,
        advice: data.slip.advice,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return { advice, getAdvice };
};
