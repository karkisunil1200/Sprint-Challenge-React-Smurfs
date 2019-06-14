import React from 'react';
import './village.css';
import {Link} from 'react-router-dom';

const Smurf = props => {
  return (
    <div className='smurf-container'>
      <div className='smurf'>
        <i onClick={() => props.delete(props.smurf)} class='fas fa-times' />
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <Link to='/update'>
          <i onClick={() => props.update(props.smurf)} class='fas fa-user-edit' />
        </Link>
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
