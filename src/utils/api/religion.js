// @flow

import * as base from './base';

const RELIGIONS_BASE = `${ base.API_BASE }/religions`;

export const get = () => {
  let url = `${ RELIGIONS_BASE }`;
  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}
