import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import ActionTypes from '../constants/index';
import assign from 'object-assign';
const CHANGE = 'CHANGE';
let _patientState = [];

let PatientStore = assign({},EventEmitter.prototype,{
	
	// Hooks a React component's callback to the CHANGE event.
	addChangeListener(callback) {
		this.on(CHANGE, callback);
	},

	// Removes the listener from the CHANGED event.
	removeChangeListener(callback) {
		this.removeListener(CHANGE, callback);
	},

	emitChange: function(){
		this.emit(CHANGE);
	},

	_getPatients: function(){
		return _patientState;
	}
	


});

Dispatcher.register(function(action){
	switch(action.actionType) {
		case ActionTypes.ADD_NEW_ITEM:
			console.log('add new item');
			break;
		case ActionTypes.GET_ALL_ITEMS:
			_patientState = _patientState.push(action.payload);
			PatientStore.emitChange();
			break;

		default:
			break;
	}
});


export default PatientStore;