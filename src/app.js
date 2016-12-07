/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
	return (

// 1. When the App starts, Redux create a new Store using the LibraryReducer and runs the reducer 1 time to give us a piece of State called Libraries (an array with a list of objects). The reducer returns each objects which represent 1 library.

// 2. After the STORE is created we pass it to the PROVIDER as a prop, where its gonna sit for the rest of the app-lifespan. The PROVIDER is a react-component that aids in the communicatin between REACT and REDUX.

// 3. Then the APP component is rendere to the screen, which in turn render the LibraryList-component. When the LL-component is rendered the CONNECT helper boots up calls mapStatetoProps, and reach back to the PROVIDER () and pulls out its STATE. Connect (mapStateToProps) then return the received values as a PROP to the LibraryList.

		<Provider store={createStore(reducers)}>
			<View>
				<Header headerText="Tech Stack" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;
