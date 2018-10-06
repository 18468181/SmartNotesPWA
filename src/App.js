import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddVenue from './AddVenue/AddVenue';

class App extends Component {
	
	constructor(props) {
    super();
	this.state={
	  appName : 'Smart Notes '
	 }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Smart Notes React App</h1>
        </header>
        <p className="App-intro">
		  We are still in process of building the app.
          To get started, edit <code>src/App.js</code> and save to reload.
		  <AddVenue/>
        </p>
		<!––Working
		<form style={{ textAlign: 'left'}}>
			<AddVenue name = {this.state.appName} />
		</form>-->
      </div>
    );
  }
}

export default App;
