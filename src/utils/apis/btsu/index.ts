import axios from 'axios';
import { BTSTU_API_PROVERB_URL } from 'src/constants/api';

export const getPoisonousChickenSoup = async () => {
  console.log('start getPoisonousChickenSoup');
  const response = await axios.get(BTSTU_API_PROVERB_URL);
  console.log(response.data);
  console.log('end getPoisonousChickenSoup');
  return response.data;
};
