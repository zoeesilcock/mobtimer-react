import React from 'react';
import Person from './person';
import PersonForm from './person_form';

class People extends React.Component {
  render() {
    return (
      <div>
        <h2>people</h2>
        <ul>
          <Person />
        </ul>
        <button>shuffle</button>
        <PersonForm />
      </div>
    );
  }
};

export default People;
