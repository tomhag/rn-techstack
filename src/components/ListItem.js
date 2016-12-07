// Component for viewing an item(library-object) in the Library list

import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	render() {
		const { titleStyle } = styles;
		console.log(this.props);
		return (
		<CardSection>
			<Text style={titleStyle}>
				{this.props.library.title}
			</Text>
		</CardSection>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 68,
		paddingLeft: 15
	}
};

// export default ListItem;
// ..
// Connected to Redux
// First arg is for mapStateToProps, second arg pass all actions to props
export default connect(null, actions)(ListItem);
