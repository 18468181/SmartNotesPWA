import React, { Component } from 'react';

class ListDevice extends Component {
	
	constructor(props) {
    super();
	this.state={
	  items: [],
	  isLoaded: false,
	 }
  }
  
   componentDidMount(){
	  
	   fetch('http://smartnotesapi.gear.host/api/devices')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoaded: true,
				items: json,
			})
		});
  } 
	
  render() {
	  
	  var { isLoaded, items} = this.state;
	  
	   if(!isLoaded){
		  return <div>Loading...</div>
	  } 
	  else{
		  return (
			<div className="ListDevice">
				Data has been Loaded
				<table>
					<tr>
						<th>Device Name</th>
						<th>Device MAC</th>
					</tr>
					{items.map(item => (
						<tr key={item.DeviceID}>
							<td>{item.DeviceName}</td>
							<td>{item.DeviceMAC}</td>
						</tr>
					))}
				</table>
			</div>
			);
		  
	  }
  }
}

export default ListDevice;
