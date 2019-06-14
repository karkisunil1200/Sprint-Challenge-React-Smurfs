import React, {Component} from 'react';

import './village.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurfs(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <div className='SmurfForm'>
        <form onSubmit={this.addSmurf} className='form'>
          <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={this.state.name}
            name='name'
            className='input'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={this.state.age}
            name='age'
            className='input'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={this.state.height}
            name='height'
            className='input'
          />
          <button type='submit' className='btn'>
            Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
