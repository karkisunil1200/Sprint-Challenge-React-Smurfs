import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
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

  render() {
    return (
      <Router>
        <div className='App'>
          <nav>
            <div className='nav-links'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/form'>Add</NavLink>
            </div>
          </nav>
          <Route
            path='/'
            render={props => (
              <Smurfs {...props} smurfs={this.state.smurfs} delete={this.deleteSmurfs} />
            )}
          />

          <Route
            path='/form'
            render={props => <SmurfForm {...props} addSmurfs={this.addSmurfs} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
