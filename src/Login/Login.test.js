import React from 'react';
import ReactDOM from 'react-dom';
import AddVenue from './AddVenue.css';

it('AddVenue renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddVenue />, div);
  ReactDOM.unmountComponentAtNode(div);
});
