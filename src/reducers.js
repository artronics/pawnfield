import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { routerReducer } from 'react-router-redux';
import { reducer as appReducer } from 'containers/Pawnfield/state';
import { reducer as loginReducer } from 'containers/Login/state';
import { reducer as tabsReducer } from 'containers/Tab/state';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    router: routerReducer,
    app: appReducer,
    login: loginReducer,
    form: formReducer,
    tabs: tabsReducer,
    ...injectedReducers,
  });
}
