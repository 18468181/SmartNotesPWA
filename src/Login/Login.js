import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
	
  render() {
	  
        (document).ready(function () {
            var ulMembers = ('#ulMembers');

            ('#btn').click(function () {
                // Get the username & password from textboxes
                var username = ('#txtUsername').val();
                var password = ('#txtPassword').val();

                //$.ajax({
                    //type: 'GET',
                    // Make sure to change the port number to
                    // where you have the employee service
                    // running on your local machine
                    //url: '/api/Members',
                    //dataType: 'json',
                    // Specify the authentication header
                    // btoa() method encodes a string to Base64
					
					var url = '/api/Members';
					fetch(url, {
					method: "GET",
					headers: {
                        'Authorization': 'Basic ' + btoa(username + ':' + password)
                    },
					}).then(res => res.json())
					.then(res => {
					if (res.status === 200){
						console.log("accepted");
					}else {
						console.log(res.error);
					}

					console.log(res.error)
					}).catch(err => console.log(err))
					/* fetch('/api/Members')
					.then(res => res.json())
					.then(json => {
					this.setState({
						isLoaded: true,
						items: json,
						})
					}); */
                    /* headers: {
                        'Authorization': 'Basic ' + btoa(username + ':' + password)
                    }, */
                    success: function (res) {
                        ulMembers.empty();
                        each(res, function (index, val) {
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

            ('#btnClear').click(function () {
                ulMembers.empty();
            });
        });
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