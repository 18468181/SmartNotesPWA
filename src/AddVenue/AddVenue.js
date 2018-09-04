import React, { Component } from 'react';
import './AddVenue.css';

class AddVenue extends Component {
  render() {
    return (
	
      <div className="AddVenue" style={{backgroundColor:"lightgreen"}}>
        <header className="AddVenue-header">
          <h1>{this.props.name}Add Venue</h1>
        </header>
		 
        <p className="AddVenue-intro">
	    <div style={{backgroundColor:"lightgreen"}}>
			
			<form style={{ textAlign: 'left'}}>
			 <label>
			 Venue Name  <input type ="text"/>
			 </label>
             <br/><br/>
			  
			 <label>
			 Venue Description <input type ="text"/>
			 </label>
			 <br/><br/>
			
			 <label>
		     <input type ="submit" value="Add"/>
			 </label>
			 </form>
			
		</div>
		</p>
		</div>
    );
  }
}
export default AddVenue;