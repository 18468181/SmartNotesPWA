import React, { Component } from 'react';

class ListVenue extends Component {
	
	constructor(props) {
    super();
	this.state={
	  items: [],
	  //isLoaded: false,
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
		
		/* fetch('http://smartnotesapi.gear.host/api/venues')
      .then(response => {//response.json())
	  if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
	  .then(data => this.setState({ items: data.items }))
      .catch(error => this.setState({ error})); */
      //.then(data => this.setState({ items:data.items })); //Just Commented now - to be uncommented later
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
	  
	  var { /*isLoaded,*/ items/*, data*/} = this.state;
	  
	  /* if(!isLoaded){
		  return <div>Loading...</div>
	  } */
	  //else{
		  return (
			<div className="ListVenue">
				Data has been Loaded
				<ul>
					{items.map(item => (
						<li key={item.VenueID}>
							Venue: {item.VenueName} | Description: {item.VenueDescription}
						</li>
					))};
						
				</ul>
			</div>
			);
		  
	  //}
  }
}

export default ListVenue;
