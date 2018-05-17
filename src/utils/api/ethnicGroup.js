// @flow

import * as base from './base';

const ETHNICGROUPS_BASE = `${ base.API_BASE }/ethnicgroups`;

export const get = () => {
  let url = `${ ETHNICGROUPS_BASE }`;
  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}
