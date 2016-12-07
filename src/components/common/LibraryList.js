import React, { Component } from 'react';
import { connect } from 'react-redux';

// Method for pulling data out of our STATE object (Redux Store)

class LibraryList extends Component {
	render() {
// Check that mapStateToProps forge a connection to this component.
		console.log(this.props);
		return;
	}
}

// The purpose of the next function is to take some properties of our global state object in our Redux store, and provide is as PROPS.


const mapStateToProps = state => {
// Step 1 to verity that the function is called, and the first arg is 'state'
	console.log(state);
// Step 2 communicate data from this function into the Librarylist class-component
	return { libraries: state.libraries };
};

// export default LibraryList;
export default connect(mapStateToProps)(LibraryList);

// Calls the function connect, which then returns av function (LibraryList)
