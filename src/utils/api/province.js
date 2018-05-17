// @flow

import * as base from './base';

const PROVINCES_BASE = `${ base.API_BASE }/provinces`;

export const get = () => {
  let url = `${ PROVINCES_BASE }`;
  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}
