import React, { Component } from 'react';
import { 
	Field, 
	reduxForm, 
	SubmissionError 
} 							from 'redux-form';
import { 
	Input, 
	Button, 
	Message 
} 							from 'semantic-ui-react';

//const handleSubmit = () => null;

class SimpleForm extends Component{

  	submit({ location }, dispatch ){
  		return new Promise((resolve, reject) => {
  			dispatch({
  				type: 'FETCH_WEATHER',
  				location,
  				resolve,
  				reject
  			})
  		}).catch(error => {
  			throw new SubmissionError(error)
  		})
  	}

  	locationInput = ({input, meta: {touched, error }, ...custom}) => {
  		const hasError = touched && error !== undefined;
  		return (

  			<div>
	  			{hasError &&
	  				<Message
	  					error
	  					heander='Error'
	  					content={error} />}
	  				<Input
	  					error={hasError}
	  					fluid
	  					placeholder='Location...'
	  					{...input}
	  					{...custom} />
  			</div>
  		)		
  	}
  render(){
  	///console.log('FORM PROPS: ', this.props);
  	const { handleSubmit } = this.props;
  	return (
  		<div>
  			<p>redux-form</p>
		   <form onSubmit={handleSubmit(this.submit)}>
		   		<Field name="location" component={this.locationInput} />
			   	<br />
			   	<Button fluid type="submit">Submit</Button>
		   </form>
	   </div>
	)
  }
};//

const validate = values => {
	const { location } = values;
	const errors = {};
	if(!location || location.trim() === ''){
		errors.location = 'Location required';
	}
	return errors;
}

export default reduxForm({
  form: 'simple',
  validate
})(SimpleForm);

