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
	$(document).ready(function () {
            var ulMembers = $('#ulMembers');

            $('#btn').click(function () {
                // Get the username & password from textboxes
                var username = $('#txtUsername').val();
                var password = $('#txtPassword').val();

                $.ajax({
                    type: 'GET',
                    // Make sure to change the port number to
                    // where you have the employee service
                    // running on your local machine
                    url: '/api/Members',
                    dataType: 'json',
                    // Specify the authentication header
                    // btoa() method encodes a string to Base64
                    headers: {
                        'Authorization': 'Basic ' + btoa(username + ':' + password)
                    },
                    success: function (data) {
                        ulMembers.empty();
                        $.each(data, function (index, val) {
                            //var fullName = val.MemberName + ' ' + val.LastName;
                            var adminor;
                            if (val.MemberAdmin) {
                                adminor = 'Admin';
                            }
                            else {
                                adminor = 'Not Admin';
                            }
                            ulMembers.append('<li>' + val.MemberName + ' (' + adminor + ')</li>');
                        });
                    },
                    complete: function (jqXHR) {
                        if (jqXHR.status == '401') {
                            ulMembers.empty();
                            ulMembers.append('<li style="color:red">'
                                + jqXHR.status + ' : ' + jqXHR.statusText + '</li>');
                        }
                    }
                });
            });

            $('#btnClear').click(function () {
                ulMembers.empty();
            });
    });
  }
}
export default Login;