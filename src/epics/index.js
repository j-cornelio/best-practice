import { fromPromise } from 'rxjs/observable/fromPromise';
import { combineEpics } from 'redux-observable';
//import { startSubmit, stopSubmit } from 'redux-form';

const submitToServer = async (data) => {
	try {
		//await - waits until fetch is complete
		const response = await fetch('http://localhost:8080/', {
			method: 'POST',
			headers: {
		      'content-type': 'application/json'
		    },
		    body: JSON.stringify(data)
		})

		//waiting for json from response
		return await response.json();
	}catch(error) {
		return error
	}
}

const registerEpic = (action$, { getState, dispatch }) =>
	action$.ofType('REQUEST_SUBMIT')
		//.do(dispatch(startSubmit('contact')))
		.mergeMap(action => 
			fromPromise(submitToServer(action.data)) //
				.map(response => {
console.log('RESPONSE: ==> ', response);
					//dispatch(stopSubmit('contact', response.errors || {}))
					if(response.errors){
						return {
							type: 'REQUEST_FAILED',
							errors: response.errors,
						}
					}else{
						return {
							type: 'REQUEST_SUCCESSFUL'
						}
					}
				})
		)

export default combineEpics(
	registerEpic
);