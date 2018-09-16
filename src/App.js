import React, { Component } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import PlebView from "./Components/PlebView/ConsumerView"
import TestStream from "./Components/PlebView/EmotionAnalytics"
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
    this.state={
      clicked: false
    }
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={() => <div><PlebView stopVideo={() => {this.setState({clicked: true});}}/><TestStream clicked={this.state.clicked} setClicked={() => {this.setState({clicked: !this.state.clicked});}}/></div>}/>
          <Route exact path='/creator' component={() => <div><CreatorView stopVideo={() => {this.setState({clicked: true});}}/><TestStream clicked={this.state.clicked} setClicked={() => {this.setState({clicked: !this.state.clicked});}}/></div>}/>
          <Route exact path='/stream' component={TestStream}/>
        </Switch>
      </main>
    );
  }
}

export default App;
