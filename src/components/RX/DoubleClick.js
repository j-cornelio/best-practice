import React, { Component } from 'react';
// eslint-disable-next-line
import Rx from 'rxjs';

// https://www.youtube.com/watch?v=biVbj7b0M8I&t=1819s

const updateMarkerPosition = (marker, clientX=0, clientY=0, box) => {
	const x 			= clientX - box.offsetLeft;
	const y 			= clientY - box.offsetTop;
	const halfMarkerSize = 0.5 * 10;
	marker.style.top 	= `${y - halfMarkerSize}px`;
	marker.style.left 	= `${x - halfMarkerSize}px`;
}


class RenderMe extends Component {
	componentDidMount() {
		const box = document.querySelector('#marker');
		const clickMarker = document.querySelector('#marker');
		
		const $click = Rx.Observable.fromEvent(box, 'click')

		$click
			.subscribe(({ clientX, clientY }) =>
				updateMarkerPosition(clickMarker, clientX, clientY, box)
		)

		// Rx.Observable.fromEvent(button, 'click')
		// 	.subscribe((e) => console.log('%c Event ', 'background: lime', e.clientX))

	}
	render(){
		return (
			<div>
				<h1 id="box">XOX</h1>
				<button id="marker">move</button>
			</div>
		)
	}
}

export default RenderMe;

