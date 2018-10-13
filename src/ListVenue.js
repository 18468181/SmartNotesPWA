import React, { Component } from 'react';

class ListVenue extends Component {
	
	constructor(props) {
    super();
	this.state={
	  items: [],
	  isLoaded: false,
	  //data: [],
	  //error: null,
	 }
  }
  
   componentDidMount(){
	  
	  /* fetch('http://smartnotesapi.gear.host/api/venues').then(response => {
		  this.setState({
			  isLoaded: true,
			  items: response.data
		  });
	  }); */
	  
	  //http://jsonplaceholder.typicode.com/users
	  
	  //http://smartnotesapi.gear.host/api/venues
	  
	   fetch('http://smartnotesapi.gear.host/api/venues')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoaded: true,
				items: json,
			})
		});
  } 
  
  /* componentDidMount() {
        fetch('http://localhost:51080/api/venues')
            .then((Response) => Response.json())
            .then((findresponse) => {
                console.log(findresponse)
                this.setState({
                    items: findresponse

                })
                console.log(findresponse);
            })
    } */
	
  render() {
	  
	  var { isLoaded, items/*, data*/} = this.state;
	  
	   if(!isLoaded){
		  return <div>Loading...</div>
	  } 
	  else{
		  return (
			<div className="ListVenue">
				Data has been Loaded
				<ul>
					{items.map(item => (
						<li key={item.VenueID}>
							Venue: {item.VenueName} | Description: {item.VenueDescription}
						</li>
					))}
						
				</ul>
			</div>
			);
		  
	  }
  }
}

export default ListVenue;
