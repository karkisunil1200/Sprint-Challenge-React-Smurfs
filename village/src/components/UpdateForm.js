import React, {Component} from 'react';

import './village.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        name: this.props.smurf.name,
        age: this.props.smurf.age,
        age: this.props.smurf.age,
        id: this.props.smurf.id
      });
    }
  }

  updateSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.update(this.state);

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
        <form onSubmit={this.updateSmurf} className='form'>
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
            Update Info
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
