// @flow

import { combineReducers } from 'redux';

import { reducer as countries } from './countries';
import { reducer as districts } from './districts';
import { reducer as provinces } from './provinces';
import { reducer as wards } from './wards';
import { reducer as ethnicGroups } from './ethnicGroups';
import { reducer as religions } from './religions';
import { reducer as politicalOrganizations } from './politicalOrganizations';
import { reducer as languageSkills } from './languageSkills';
import { reducer as informaticsskills } from './informaticsskills';

const reducer = combineReducers({
  countries,
  provinces,
  districts,
  wards,
  ethnicGroups,
  religions,
  politicalOrganizations,
  languageSkills,
  informaticsskills
});

export default reducer;