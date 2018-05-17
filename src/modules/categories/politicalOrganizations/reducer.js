// @flow

import type { PoliticalOrganization, PoliticalOrganizationState } from './types';
import type { Action } from '../../../types';

import * as constant from './constants';

const initialState: PoliticalOrganizationState = {
  data: {},
  ordered: [],
  isFetching: false
};

let reducer = (state: PoliticalOrganizationState = initialState, action: Action): PoliticalOrganizationState => {
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
      let list: Array<PoliticalOrganization> = action.payload;
      let newData = { };
      let set = new Set(state.ordered);
      list.forEach((po: PoliticalOrganization) => {
        newData[po.id] = po;
        set.add(po.id)
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