import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import Main from './components/app';


import allReducers from './reducers';
const store = createStore(allReducers);


ReactDOM.render(
<Provider store={store}>
	
	
	<Router history={browserHistory}>
      <Route path="/" component={Main} />
	  <Route path="/main" component={Main} />
    </Router>
	
</Provider>,


 document.getElementById('root'));
registerServiceWorker();
