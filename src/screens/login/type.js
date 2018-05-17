// @flow

import type { Action } from './types';

export type Session = {
  userId: ?string,
  token: ?string,
  created: ?Date,
  ttl: ?number,
  saveInfo: boolean
};

export type Actions = {
  setSession: (userId: string, token: string, created: Date, ttl: number, saveInfo: boolean)=>Action,
  resetSession: ()=>Action
};
