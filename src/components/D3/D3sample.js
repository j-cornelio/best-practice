import React, { Component } from 'react';
import d3 from 'd3';

class D3sample extends Component {
	componentDidMount() {
		this.createChart()
	}

	componentDidUpdate(prevProps, prevState) {
		this.createChart()	
	}

	createChart = () => {
	 	var data = [4, 8, 15, 16, 23, 42];

		var x = d3.scale.linear()
		    .domain([0, d3.max(data)])
		    .range([0, 420]);

		d3.select(".chart")
		  .selectAll("div")
		    .data(data)
		  .enter().append("div")
		    .style("width", function(d) { return x(d) + "px"; })
		    .text(function(d) { return d; });
	}

	render(){
		return (
			<div className="chart" ref={(node) => this.chart = node}></div>
		)
	}
}

export default D3sample;