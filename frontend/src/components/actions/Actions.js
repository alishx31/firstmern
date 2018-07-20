import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';
import axios from 'axios';
let PatientActions = {

	addNewItem(item) {
		// Note: This is usually a good place to do API calls.
		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_NEW_ITEM,
			payload: item 
		});
	},

	getAll(){
		axios.get('/patients').then(data => {
		Dispatcher.dispatch({
			actionType: ActionTypes.GET_ALL_ITEMS,
			payload: data
		});
		})
	}

}

export default PatientActions;