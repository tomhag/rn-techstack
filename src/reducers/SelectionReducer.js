// Reducers are always called with the object, and action
// Note: if state is undefined, then return null and continue on...

export default (state = null, action) => {
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state;
	}
};
