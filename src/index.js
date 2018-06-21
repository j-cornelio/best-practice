import React 			from 'react';
import ReactDOM 		from 'react-dom';
import App 				from './containers/App';
import configureStore 	from './store/configureStore';
import { Provider } 	from 'react-redux';
import 'rxjs';

//import styles			from './css/styles';

const store = configureStore();

console.log('STORE: =>', store.getState())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
