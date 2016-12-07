import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

// Our STATE object will have a key of 'libraries' and values of the list of libraries produced by the LibraryReducer

export default combineReducers({
	libraries: LibraryReducer
});
