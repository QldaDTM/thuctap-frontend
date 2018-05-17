// @flow

import type { LanguageSkill, LanguageSkillState } from './types';
import type { Action } from '../../../types';

import * as constant from './constants';


const initialState: LanguageSkillState = {
  data: {},
  ordered: [],
  isFetching: false,
  error: null
};

let reducer = (state: LanguageSkillState = initialState, action: Action): LanguageSkillState => {
  switch (action.type) {
    case constant.RESET:
      return { ...initialState };
    case constant.FETCH_STARTED:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case constant.FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case constant.FETCH_FINISHED: {
      let list: Array<LanguageSkill> = action.payload;
      let data = { ...state.data };
      let ordered: Array<string> = [];

      list.forEach((languageSkill: LanguageSkill) => {
        data[languageSkill.id] = languageSkill;
        ordered.push(languageSkill.id);
      });

      return {
        data,
        ordered,
        isFetching: false,
        error: null
      };
    }
  }


  return state;
};

export default reducer;