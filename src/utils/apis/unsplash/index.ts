import { createApi } from 'unsplash-js';
import * as nodeFetch from 'node-fetch';
import { UNSPLASH_ACCESSKET } from 'src/constants/api';

export const unsplash = createApi({
  accessKey: UNSPLASH_ACCESSKET,
  fetch: nodeFetch.default as unknown as typeof fetch,
});

export const getRandomCat = () => {
  return new Promise((_resovle, _reject) => {
    unsplash.photos
      .getRandom({
        query: 'cat',
      })
      .then((res: any) => {
        console.log(res);
        _resovle(res);
      })
      .catch((err: any) => {
        console.log(err);
        _reject(err);
      });
  });
};
