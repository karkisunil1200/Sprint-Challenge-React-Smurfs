import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import UpdateForm from './components/UpdateForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  }

  addSmurfs = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteSmurfs = smurf => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getUpdate = smurf => {
    this.setState({
      smurf: smurf
    });
  };

  update = smurf => {
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        this.setState({
          smurf: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='App'>
        <nav>
          <div className='nav-links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink exact to='/form'>
              Add
            </NavLink>
          </div>
        </nav>
        <Route
          path='/'
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              delete={this.deleteSmurfs}
              getUpdate={this.update}
            />
          )}
        />

        <Route path='/form' render={props => <SmurfForm {...props} addSmurfs={this.addSmurfs} />} />

        <Route
          path='/update'
          render={props => <UpdateForm {...props} update={this.update} smurf={this.state.smurf} />}
        />
      </div>
    );
  }
}

export default App;
