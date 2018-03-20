import React     	from 'react';
import Props      	from '../components/communication/Props';
import Instance     from '../components/communication/Instance';
import Callback     from '../components/communication/Callback';
import Bubbling     from '../components/communication/Bubbling';
import Parent     	from '../components/communication/Parent';


const Communication = () => (
  <div>
  	<p>go to article: <a target="_blank" href="https://www.javascriptstuff.com/component-communication/#1-props">Communication between components</a></p>
  	<hr />
    <Props />
    <hr />
    <Instance />
    <hr />
    <Callback />
    <hr />
    <Bubbling />
    <hr />
    <Parent />
    <hr />
  </div>
);

export default Communication;