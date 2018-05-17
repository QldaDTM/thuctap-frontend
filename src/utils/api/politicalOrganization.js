// @flow

import * as base from './base';

const POLITICAL_ORGANIZATION_BASE = `${ base.API_BASE }/politicalorganizations`;

export const get = () => {
  let url = `${ POLITICAL_ORGANIZATION_BASE }`;
  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}
