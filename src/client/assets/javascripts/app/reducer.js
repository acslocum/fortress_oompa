import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import songs, { NAME as songsName } from 'features/songs';

export default combineReducers({
  routing,
  [songsName]: songs
});
