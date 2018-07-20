import React, { Component } from 'react';
import './App.css';
import PatientList from './components/CreatePatient';

class App extends Component {


  render() {
    return (
      <div>
      
      
        <div className="App-intro">
           
          <PatientList />
        </div>
        </div>
    );
  }
}

export default App;
