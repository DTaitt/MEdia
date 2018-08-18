import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import store from 'redux/store';
import App from 'components/App/App';

const history = createBrowserHistory();

const ConnectedApp = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
);

const root = document.querySelector('#root');

ReactDOM.render(ConnectedApp, root);
registerServiceWorker();