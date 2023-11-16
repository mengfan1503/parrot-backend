import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { createApi } from 'unsplash-js';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    console.log(123);
    const url = 'https://api.btstu.cn/yan/api.php';
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  }

  async getImg(): Promise<any> {
    console.log(123);
    const api = createApi({
      // Don't forget to set your access token here!
      // See https://unsplash.com/developers
      accessKey: 'dJeNIanGyRWsfRYFtuJ2jwelJMzAPB76Ss3XZWq3BMs',
    });
    api.search
      .getPhotos({
        query: 'cat',
      })
      .then((res: any) => {
        console.log(res);
        return res;
      })
      .catch((err: any) => {
        return err;
      });
  }
}
