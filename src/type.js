// @flow

import type { Session } from './screens/login/type';

export type Action = {
  type: string,
  payload: any
};

export type GlobalState = {
  session?: Session
};

export type NotifyDesc = {
};

export type Notification = {
  e: (title: string, msg: string) => any,
  s: (title: string, msg: string) => any,
  w: (title: string, msg: string) => any,
  i: (title: string, msg: string) => any,
  clear: () => void,
  trigger: (desc: NotifyDesc) => void
};