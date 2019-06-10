import { combineReucers } from 'redux';
import notes from './notesReducers';

export default combineReucers({
  notes
});
