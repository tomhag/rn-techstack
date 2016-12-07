// Component for viewing an item(library-object) in the Library list

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
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
export default connect(null, actions)(ListItem);
