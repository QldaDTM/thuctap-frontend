// @flow

import type { GlobalState } from '../types';

export const loadState = (key: string): GlobalState => {
  try {
    const jsonState: ?string = localStorage.getItem(key);
    if (jsonState == null) return { };

    const sessionStudent = JSON.parse(jsonState);
    return { sessionStudent };
  } catch (err) {
    return { };
  }
};

export const saveState = (key: string, state: GlobalState) => {
  try {
    console.log(state);
    const jsonState = JSON.stringify(state);
    console.log(jsonState);
    localStorage.setItem(key, jsonState);
  } catch (err) {
  }
}

export const deleteState = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
  }
}
