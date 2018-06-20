import React, { Component } from 'react';

class DragDrop extends Component{
	state = { 
		drag: 'Drag It!',
		grab: false 
	}

	componentDidMount(){
		console.clear();
	}

	allowDrop = (ev) => {
	    ev.preventDefault();
	    console.log('dragging');
	    ev.dataTransfer.dropEffect = "copy";
	}

	onDragLeave = (event) => {

		console.clear();
		console.log('DIV -> ', event.target)
	    this.setState((state) => ({ entered: false}))
	}

	onDragEnter = (event) => {
	    this.setState((state) => ({ entered: true}))
	}

	drag = (ev) => {
		console.log('ev ', ev);

	    ev.dataTransfer.setData("text", ev.target.id);
	    ev.dataTransfer.effectAllowed = "copyMove";
	    ev.dataTransfer.dropEffect = "copy";
	    this.setState((state) => ({ drag: 'Drag Started'}))
	}

	drop = (ev) => {
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data));
	    this.setState((state) => ({ drag: 'Now Dropped'}))
	}

	show = () => {
		console.log('clicked');
		this.setState(() => ({ grab: true}))
	}

	up = () => {
		console.log('now up')
		this.setState(() => ({ grab: false}))
	}

	render(){
		return (
			<div>
				<h4>{this.state.drag}</h4>

				<pre>it is being dragged: {JSON.stringify(this.state.drag  === 'Drag Started')}</pre>
				<pre>grabbed: {JSON.stringify(this.state.grab)}</pre>
				<pre>entered: {JSON.stringify(this.state.entered)}</pre>
				
				<div id="div1" onMouseDown={this.show} onMouseUp={this.up} onDrop={this.drop} onDragOver={this.allowDrop}>
				  <img className={this.state.grab ? 'grabbing' : ''} src="https://www.mozilla.org/media/img/logos/firefox/logo-quantum-wordmark-white-high-res.3ccf0070280e.png" draggable="true" onDragStart={this.drag} id="drag1" width="88" height="31" />
				</div>

				<div id="div2" className={this.state.entered ? 'entered' : ''} onDrop={this.drop} onDragOver={this.allowDrop} onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave}></div> 
				<div id="div3" className={this.state.entered ? 'entered' : ''} onDrop={this.drop} onDragOver={this.allowDrop} onDragEnter={this.onDragEnter} onDragLeave={this.onDragLeave}></div> 
			</div>
 		)
	}
}

export default DragDrop;