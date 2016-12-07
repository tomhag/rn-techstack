// Component for viewing an item(library-object) in the Library list

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

// Helper method
	renderDescription() {
		// descructiring
		const { library, selectedLibraryId } = this.props;

		// if (this.props.library.id === this.props.selectedLibraryId) {
		// 	return (
		// 		<Text>{this.props.library.description}</Text>

		if (library.id === selectedLibraryId) {
			return (
				<Text>{library.description}</Text>
			);
		}
	}

	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		return (
		<TouchableWithoutFeedback
			onPress={() => this.props.selectLibrary(id)}
		>
			<View>
				<CardSection>
					<Text style={titleStyle}>
						{title}
					</Text>
				</CardSection>
				{this.renderDescription()}
			</View>
		</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 20,
		paddingLeft: 15
	}
};

// export default ListItem;
// ..
// Connected to Redux
// First arg is for mapStateToProps, second arg pass all actions to props
// A component want to 'consume' some piece of Application level state => Add on a mapStateToProps

const mapStateToProps = state => {
	return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, actions)(ListItem);
