import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/SignIn.js'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render() {
    return (
      <SignIn/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
