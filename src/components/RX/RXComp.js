import React, { Component } from 'react';
// eslint-disable-next-line
import Rx from 'rxjs';
import { interval } from 'rxjs/observable/interval';
import { mapTo } from 'rxjs/operators';

// http://reactivex.io/rxjs/manual/tutorial.html
// http://reactivex.io/rxjs/manual/overview.html

//console.log('mapTo: ', mapTo);

// Observable - stream
// const source = interval(2000);
// const example = source.pipe(mapTo('HELLO WORLD!'));
// const subscribe = example.subscribe(val => console.log('VAL ----> ', val));

/*

		Rx.Observable.interval(1000)
			.subscribe(console.log)

			only appear when you subcribe. subcribe func gets da value on da stream as it's argument 

			Observables can be created from events
*/

class RenderMe extends Component {
	componentDidMount() {
		const button = document.querySelector('#test');

		// console.log('OBS::::', Rx.Observable.of('foo', 'bar') )

		// Rx.Observable.fromEvent(button, 'click')
		// 	.subscribe((e) => console.log('%c Event ', 'background: lime', e.clientX))

		Rx.Observable.fromEvent(button, 'click')
					.do(button => console.log('BUTTON: -> ', button))
			.ignoreElements()

		  // .scan(count => count + 1, 0)
		  // .subscribe(count => console.log(`Clicked ${count} times`));


		// Rx.Observable
		//   .fromEvent(button, 'click')
		//   .throttleTime(5000)
		//   .scan(count => count + 1, 0)
		//   .subscribe(count => console.log(`Clicked ${count} times`));

		// Rx.Observable.fromEvent(button, 'click')
		//   .throttleTime(1000)
		//   .map(event => {
		//   	console.log('EVENT: ==>', event)
		//   	return event.clientX
		//   })
		//   .scan((count, clientX) => count + clientX, 0)
		//   .subscribe(count => console.log(count));
	}
	render(){
		return <button id="test">click</button>
	}
}

export default RenderMe;

