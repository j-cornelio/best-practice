import React, { Component } from 'react';

//HOC receives props - Props Proxy.  stateless function return class, which return wrapped component

/*
<WrappedComponent {...this.props}/>
// is equivalent to
React.createElement(WrappedComponent, this.props, null)
*/
const Loader = (propName) => (Wrapper) => (
	class extends Component{
		state = {name: 'ZZZ'} // could pass state down to component as props {...this.state}

		isEmpty(value){
			return value===null || value===undefined;
		}

		componentDidMount() {
			console.log('LOADER MOUNTED')
		}

		render(){
			return (
				this.isEmpty(this.props[propName]) ? <h1>Loading</h1> : <Wrapper {...this.props} />
			)
		}
	}
);

export default Loader;