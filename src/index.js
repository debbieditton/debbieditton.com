import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import store from './store/store';
class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {Routes}
      </Provider>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
