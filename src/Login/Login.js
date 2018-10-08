import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
	
      <div className="Login" style={{backgroundColor:"lightgreen"}}>
        <header className="Login-header">
          <h1>{this.props.name}Login</h1>
        </header>
		 
        <p className="Login-intro">
	    <div style={{backgroundColor:"lightgreen"}}>
		<body>
			Username : <input type="text" id="txtUsername" />
			Password : <input type="password" id="txtPassword" />
			<br /><br />
			<input id="btn" type="button" value="Authenticate and Get Members" />
			<input id="btnClear" type="button" value="Clear" />
			<ul id="ulMembers"></ul>
			</body>
			
			<form style={{ textAlign: 'left'}}>
			 <label>
			 Username  <input type ="text"/>
			 </label>
             <br/><br/>
			  
			 <label>
			 Password <input type ="text"/>
			 </label>
			 <br/><br/>
			
			 <label>
		     <input type ="submit" value="Login"/>
			 </label>
			 </form>
			
		</div>
		</p>
		
		</div>
    );
  }
}
export default Login;