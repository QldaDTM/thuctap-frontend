
import * as constant from './constants';

let initialState = {
  breadcrumb_name: '',
  breadcrumb_action: '',
  breadcrumb: []
};
  
let reducer = (state: CountryState = initialState, action: Action): CountryState => {
  console.log(action.payload);
  switch (action.type) {
    case constant.SET_BREADCRUMB:
    {
      console.log('action');
      
      let { name, action: action_name, breadcrumb } = action.payload
      return {
        breadcrumb_name: name,
        breadcrumb_action: action_name,
        breadcrumb: breadcrumb
      };
    }

    default:
      break;
  }

  return state;
};

export default reducer;