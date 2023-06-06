import axios from 'axios';

const BASE_URL = 'https://api.adviceslip.com/advice';

export const fetchAdvice = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch advice');
  }
};
