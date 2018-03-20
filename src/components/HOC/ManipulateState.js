import React, { Component } from 'react';

// const MS = (WrappedComponent) => (
//   class PP extends Component {
//     render() {
//       return <WrappedComponent />
//     }
//   }
// )



const MP = (WrappedComponent) => (
  class PP extends Component {
  	constructor(props){
  		super(props);
	  	this.state = {city: 'QQQ'}

	  	this.onNameChange = this.onNameChange.bind(this)
  	}


  	onNameChange(e){ 
  		console.log(this);
		this.setState((prevState) => {
			return {
				city: 'SANTO DOMINGO'
			}
		})
	}

    render() {
    	const newProps = {
    			city: this.state.city,
    			onChange: this.onNameChange
    		
    	}
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
)

export default MP;

