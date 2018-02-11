import React, { Component } from 'react';
//import  './LoaderHOC.css';
//https://www.youtube.com/watch?v=LTunyI2Oyzw&t=69s

const LoaderHOC = (propName) => (WrappedComponent) => {
	return class LoaderHOC extends Component{
		isEmpty(prop){
			return (
				prop===null || prop===undefined || prop.hasOwnProperty('length') && prop.length===0 ||
					prop.constructor===Object && Object.keys(prop).length===0
			)
		}

	    render(){
console.log('props---', this.props);
	      return this.isEmpty(this.props[propName]) ? <h1>LOADER</h1> : <WrappedComponent {...this.props} />
	    }
	}
}

export default LoaderHOC;
