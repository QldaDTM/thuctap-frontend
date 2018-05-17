// @flow

import type { EthnicGroup, EthnicGroupState } from './types';
import type { Action } from '../../../types';

import * as constant from './constants';

const initialState: EthnicGroupState = {
  data: {},
  ordered: [],
  isFetching: false
};

let reducer = (state: EthnicGroupState = initialState, action: Action): EthnicGroupState => {
  switch (action.type) {
    case constant.RESET:
      return { ...initialState };

    case constant.FETCH_STARTED:
      return {
        ...state,
        isFetching: true
      };

    case constant.FETCH_FAILED:
      return {
        ...state,
        isFetching: false
      };

    case constant.FETCH_FINISHED:
    {
      let list: Array<EthnicGroup> = action.payload;
      let newData = { };
      let set = new Set(state.ordered);
      list.forEach((eg: EthnicGroup) => {
        newData[eg.id] = eg;
        set.add(eg.id)
      });
      let newOrdered: Array<string> = [ ...set.keys() ];

      return {
        data: { ...state.data, ...newData },
        ordered: newOrdered,
        isFetching: false
      };
    }

    default:
      break;
  }

  return state;
};

export default reducer;