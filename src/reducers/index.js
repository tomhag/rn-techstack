import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
// Our STATE object will have a key of 'libraries' and values of the list of libraries produced by the LibraryReducer
	libraries: LibraryReducer,
	selectedLibraryId: SelectionReducer
});
