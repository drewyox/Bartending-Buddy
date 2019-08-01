import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import AOS from 'aos';
import 'aos/src/sass/aos.scss';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';



const store = createStore(rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(fbConfig),
      reactReduxFirebase(fbConfig)
    )
  );

const render = (Component) => {
  AOS.init();
  AOS.refresh();
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <HashRouter>
          <Component/>
        </HashRouter>
      </AppContainer>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
