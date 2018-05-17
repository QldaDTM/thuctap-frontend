// @flow

import * as base from './base';

const WARDS_BASE = `${ base.API_BASE }/wards`;

export const get = () => {
  let url = `${ WARDS_BASE }`;
  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}
