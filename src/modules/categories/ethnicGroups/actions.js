// @flow

import * as constant from './constants';
import { api } from './../../../utils';

import type { Action } from '../../../types';
import type { GlobalState } from '../../../types';

export const reset = ():Action => {
  return {
    type: constant.RESET,
    payload: null
  };
}

export const fetchStarted = ():Action => {
  return {
    type: constant.FETCH_STARTED,
    payload: null
  };
};

export const fetchFailed = (error: any):Action => {
  return {
    type: constant.FETCH_FAILED,
    payload: error
  };
};

export const fetchFinished = (data: any):Action => {
  return {
    type: constant.FETCH_FINISHED,
    payload: data
  };
};

export const fetchAll = (): Function => {
  return (dispatch: (action: Action)=>void, getState: ()=>GlobalState) => {
    dispatch(fetchStarted());
    api.ethnicGroup.get()
      .then(lst => {
        dispatch(fetchFinished(lst));
      })
      .catch(err => {
        dispatch(fetchFailed(err));
      });
  };
};