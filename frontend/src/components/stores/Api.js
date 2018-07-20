import axios from 'axios';

export function getAllPatients(){
    axios.get('/patients').then(data => data.json()).then(result => result.data);
}