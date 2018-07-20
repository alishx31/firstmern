const mongoose = require('mongoose');
const {Schema} = mongoose;


const PatientSchema = new Schema({
  name: {
    type: String,
    
  },
  age: {
    type: String,
    
  },
  title: {
    type: String,
  },
  symptoms: {
    type: [String],
  },
});
const Patient = mongoose.model('patient', PatientSchema);
module.exports = Patient;
