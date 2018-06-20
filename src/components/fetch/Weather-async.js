import React, { Component } from 'react';

const URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

class Weather extends Component{
	state = {}

	async componentDidMount() {
		try {
			const res = await fetch(URL);
			const data = await res.json();

			this.setState((state) => ( {data} ))
		}
		catch(err){
			alert(err)
		}
	}

	render(){
		const { data } = this.state;
		if( !data ) return 'no data';

		return (
			<p>{this.state.data.query.results.channel.image.title}</p>
		)
	}
}

export default Weather;