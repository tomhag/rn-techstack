// Action creator(s), a plain JS function returning a plain object.
// Like every Redux part, this must be wired up to Redux
// 'Export' for exporting MANY things

export const selectLibrary = (libraryID) => {
	return {
		type: 'select_library',
		payload: libraryID
	};
};
