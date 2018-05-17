import * as constant from './constants';

export const setBreadcrumb = (data) => {
  return {
    type: constant.SET_BREADCRUMB,
    payload: data
  };
}