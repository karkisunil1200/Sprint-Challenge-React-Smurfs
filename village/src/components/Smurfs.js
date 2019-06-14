import React, {Component} from 'react';

import Smurf from './Smurf';
import './village.css';

class Smurfs extends Component {
  render() {
    return (
      <div className='Smurfs-container'>
        <h1 className='heading'>Smurf Village</h1>
        <div className='Smurfs'>
          <ul className='smurfs-list'>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  delete={this.props.delete}
                  smurf={smurf}
                  update={this.props.getUpdate}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
