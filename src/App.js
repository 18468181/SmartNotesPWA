import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/* import AddVenue from './AddVenue/AddVenue';*/
//import Login from './Login/Login'; 
import ListVenue from './ListVenue';
import ListDevice from './ListDevice';

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
		  
		  
        </p>
		
		<ListVenue/>
		<ListDevice/>
      </div>
	  
    );
  }
}

export default App;
