import React from 'react';
import './village.css';

const Smurf = props => {
  return (
    <div className='smurf-container'>
      <div className='smurf'>
        <i onClick={() => props.delete(props.smurf)} class='fas fa-times' />
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
