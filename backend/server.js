const express = require('express');
const mongoose = require('mongoose');
const PatientController = require('./controllers/patientController');
const app = express();

let connection = mongoose.connect('mongodb://localhost:27017/techstack',{useNewUrlParser: true})
.then('console.log("success")').catch(err => console.log(err));
app.get('/',(req,res)=> res.send('server starting'));

app.get('/patients',PatientController.getAllPatient);
app.post('/patient/create',PatientController.storePatient);



app.listen(4000, ()=> console.log('server started on 4000'));

