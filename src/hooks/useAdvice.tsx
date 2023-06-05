import { useState } from 'react';
import { AdviceService, IAdvice } from '../services/Advice.service';

export function useAdvice() {
  const [adviceObject, setAdviceObject] = useState<IAdvice>();
  const getAdvice = async () => {
    const { data } = await AdviceService.getAdvice();
    setAdviceObject(data);
  };

  return { adviceObject, getAdvice };
}
