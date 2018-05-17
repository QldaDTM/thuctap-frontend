// @flow

import * as base from './base';

const COUNTRIES_BASE = `${ base.API_BASE }/countries`;

export const get = () => {
  let url = `${ COUNTRIES_BASE }`;
  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}
