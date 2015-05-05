import React from 'react';

class Person extends React.Component {
  render() {
    return (
      <li>
        <a href="#">x</a>
        <span>{this.props.name}</span>
      </li>
    );
  }
};

export default Person;
