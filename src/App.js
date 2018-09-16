import React, { Component } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import PlebView from "./Components/PlebView/PlebView"
import CreatorView from "./Components/CreatorView/CreatorView"

/* Main application. */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

/* Controls what component to render on which page. */
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={PlebView}/>
          <Route exact path='/creator' component={CreatorView}/>
        </Switch>
      </main>
    );
  }
}

export default App;
