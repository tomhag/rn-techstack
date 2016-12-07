import React, { Component } from 'react';
import { connect } from 'react-redux';

// Method for pulling data out of our STATE object (Redux Store)

class LibraryList extends Component {
	render() {
		console.log(this.props);
		return;
	}
}

const mapStateToProps = state => {
	return { libraries: state.libraries };
};

// export default LibraryList;
export default connect(mapStateToProps)(LibraryList);

// Calls the function connect, which then returns av function (LibraryList)
