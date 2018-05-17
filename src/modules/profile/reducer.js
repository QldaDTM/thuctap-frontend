
import * as constant from './constants';

let initialState = {
  data: null
};
  
let reducer = (state: CountryState = initialState, action: Action): CountryState => {
  switch (action.type) {
    case constant.RESET:
      return { ...initialState };

    case constant.FETCH_STARTED:
      return {
        ...state,
      };

    case constant.FETCH_FAILED:
      return {
        ...state,
      };

    case constant.FETCH_FINISHED:
    {
      return {
        data: action.payload
      };
    }

    default:
    break;
  }

  return state;
};

export default reducer;