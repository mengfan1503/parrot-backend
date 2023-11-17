import { Injectable } from '@nestjs/common';
import { getRandomCat } from './utils/apis/unsplash';
import { getPoisonousChickenSoup } from './utils/apis/btsu';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    console.log('service gethello');
    const data = await getPoisonousChickenSoup();
    return data;
  }

  async getImg(): Promise<any> {
    console.log('service getCat');
    const data = await getRandomCat();
    return data;
  }
}
