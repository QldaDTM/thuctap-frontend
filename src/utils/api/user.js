// @flow

import * as base from './base';

const USER_LOGIN = `${ base.API_BASE }/users/login`;

export const login = (username: string, password: string) => {
  let body = { username, password };
  return base.post(USER_LOGIN, body, 200)
    .then(obj => {
      return {
        userId: obj.userId,
        token: obj.id,
        created: obj.created,
        ttl: obj.ttl
      };
    });
}