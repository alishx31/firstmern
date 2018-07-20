const mongoose = require('mongoose');
const Patient = require('../models/patient');

function getAllPatient(req,res){
        return Patient.find()
        .then(data => res.json(data))
        .catch(err => res.send(err));
}

function storePatient(req,res) {

   let patient = new Patient(req.body.patient);
        
       return  patient.save()
        .then(console.log('here'))
        .catch('err');




}

module.exports = {getAllPatient,storePatient};