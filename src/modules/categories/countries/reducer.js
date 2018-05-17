// @flow

import type { Country, CountryState } from './types';
import type { Action } from '../../../types';

import * as constant from './constants';

const initialState: CountryState = {
  data: {},
  ordered: [],
  isFetching: false
};

let reducer = (state: CountryState = initialState, action: Action): CountryState => {
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
      let list: Array<Country> = action.payload;
      let newData = { };
      let set = new Set(state.ordered);
      list.forEach((country: Country) => {
        newData[country.id] = country;
        set.add(country.id)
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