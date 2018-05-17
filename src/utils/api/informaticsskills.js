// @flow

import * as base from './base';

const LANGUAGE_SKILL_BASE = `${ base.API_BASE }/informaticsskills`;

export const fetchAll = (where: ?any) => {
  where = where || {};

  let url = `${ LANGUAGE_SKILL_BASE }?filter=${ encodeURIComponent(JSON.stringify(where) )}`;
  return base.get(url, 200)
    .then(obj => {
      return obj;
    });
}