import * as constant from './constants';
import { localStorage } from './../../utils';

export const saveSessionState = (data) => {
  localStorage.saveState('idStudent', data);
  return {
    type: constant.SET_SESSION,
    payload: data
  }; 
}

export const resetSession = (): Action => {
  localStorage.deleteState('idStudent');

  return {
    type: constant.RESET_SESSION,
    payload: null
  };
};