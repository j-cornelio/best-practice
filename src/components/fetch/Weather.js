import React, { Component } from 'react';
import _ 					from 'lodash';

const URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

class Weather extends Component{
	state = {}

	componentDidMount() {
		fetch(URL)
			.then( res => res.json())
			.then( data => this.setState((state) => ( {data} )) )
	}

	render(){
 	 	console.log('LODASH: ', _.has(this.state.data, 'query'));
		// const title = _.has(this.state.data, 'query') ? 
		// 	this.state.data.query.results.channel.image.title : 'loading';

		const title = (this.state.data && this.state.data.query) ? 
			this.state.data.query.results.channel.image.title : 'loading';



		return (
			<p>{title}</p>
		)
	}
}

export default Weather;