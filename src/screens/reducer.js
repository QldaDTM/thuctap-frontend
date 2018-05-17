// @flow

import { combineReducers } from 'redux';

import { reducer as dashboard } from './../modules/dashboard';
import { reducer as sessionStudent } from './../screens/login/index';
import { reducer as categories } from './../modules/categories';
import { reducer as profile } from './../modules/profile';
import { reducer as breadcrumb } from './../screens/components/breadcrumb';

const reducer = combineReducers({
  sessionStudent,
  categories,
  dashboard,
  profile,
  breadcrumb
});

export default reducer;