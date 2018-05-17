// @flow

import type { Session } from './types';
import type { Action } from './types';

import * as constant from './constants';

const initialState: Session = {
  idStudent: null,
  name: null
};

let reducer = (state: Session = initialState, action: Action): Session => {
  switch (action.type) {
    case constant.SET_SESSION:
    {
      let info: Session = action.payload;
      return {
        ...info
      };
    }

    case constant.RESET_SESSION:
      return {
        idStudent: null
      };

    default:
      break;
  };

  return state;
};

export default reducer;