import React, { Component } from 'react';
import { connect } 			from 'react-redux';
import { 
	Field, 
	reduxForm, 
	SubmissionError 
} from 'redux-form';
import { 
	Input, 
	Button, 
	Message 
} 							from 'semantic-ui-react';

const handleSubmit = () => null;

class SimpleForm extends Component{

  	submit = () => {}

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
	   <form onSubmit={handleSubmit(this.submit)}>
	   		<Field name="location" component={this.locationInput} />
		   	<br />
		   	<Button fluid type="submit">Submit</Button>
	   </form>
	)
  }
};

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

