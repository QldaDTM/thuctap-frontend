// @flow

import * as constant from './constants';
import { api, localStorage } from './../../utils';

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


export const getMyAccount = (): Function => {
  return (dispatch: (action: Action)=>void, getState: ()=>GlobalState) => {
    dispatch(fetchStarted());
    let auth = localStorage.loadState('idStudent');
    let id = (auth.sessionStudent && auth.sessionStudent.idStudent) ? auth.sessionStudent.idStudent : '-1';
    return api.student.getOneByStudentID(id)
      .then(lst => {
        dispatch(fetchFinished(lst));
        return lst;
      })
      .catch(err => {
        return -1;
      });
  };
};

export const updateMyAccount = (data): Function => {
  return (dispatch: (action: Action)=>void, getState: ()=>GlobalState) => {

    let auth = localStorage.loadState('idStudent');
    let id = (auth.sessionStudent && auth.sessionStudent.id) ? auth.sessionStudent.id : '-1';

    return api.student.updateOne(id, data)
      .then(lst => {
        dispatch(fetchFinished(lst));
        return lst;
      })
      .catch(err => {
        return -1;
      });
  };
};