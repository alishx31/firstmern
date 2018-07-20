import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


class PatientList extends Component {
    constructor(props) {
        super(props);
        this.state={
            patient:{}
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
            name:'name',
            age:'age',
            title:'title',
            symptoms:'symptoms'

        
        });
      }

    
      handleSubmit(event) {
          if(this.refs.name.value === ''){
              alert('title is required');
          }
          else{
       // alert('A name was submitted: ' + this.refs.title.value);
        this.setState({patient:{
            name:this.refs.name.value,
            age:this.refs.age.value,
            title:this.refs.title.value,
            symptoms:this.refs.symptoms.value
        }},function(){
            console.log(this.state.patient);
        });
        axios.post('http://localhost:4000:patient/create', {
            content: this.patient
          })
          .then(function () {
            console.log('message');
            
          })
          }
       event.preventDefault();
      }
 
      render() {
        //   let patientListname =this.props.patient.map(patient=>{
        //       return <li key={patient.id}>{patient.name}</li>
        //   });

    return (
      <div>
        <header className="App-header">
          
          <h1 className="App-title">Welcome to patient information management system</h1>
        </header>
      
        <form  onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" ref="name"   />
            </label>
            <label>
                age:
                <input type="text" ref="age"   />
            </label>
            <label>
                title:
                <input type="text" ref="title"   />
            </label>
            <label>
                symptoms:
                <input type="text" ref="symptoms"  />
            </label>
            <input type="submit" value="Submit" />
            </form>
               
          {/* <ul>
              {patientListname}
          </ul> */}
          
        </div>
    );
  }
}

export default PatientList;
