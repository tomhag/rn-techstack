import React, { Component } from 'react';
// ListView is a component that only renders the visible component
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

	// Tell ListView where to get its data instantly when the component is rendered. 
	componentWillMount() {
	// Method for listing
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
	// What data to use (which we mapped up with mapStateToProps)
			this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	// Helper method to instruct how to render a row
	renderRow(library) {
	// NOTE: Names of props to Components we create, can be anything
		return <ListItem library={library} />;
	}

	render() {
		return (
			// Creating the ListView component and giving it the data
			<ListView
				dataSource={this.dataSource}
				// Instruct how to render a single row(single library)
				renderRow={this.renderRow}
			/>
		);
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
