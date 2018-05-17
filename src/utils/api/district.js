// @flow

import * as base from './base';

const DISTRICTS_BASE = `${ base.API_BASE }/districts`;

export const get = () => {
  let url = `${ DISTRICTS_BASE }`;
  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}
