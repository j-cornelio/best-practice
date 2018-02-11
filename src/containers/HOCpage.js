import React, { Component }      from 'react';
import NameList       from '../components/HOCsample'; 

var people = [{name:'aaa'}, {name:'bbb'}, {name:'ccc'}, ]

class HOCpage extends Component {
  render() {
    return (
      <NameList name={'vlad'} />
    );
  }
}

export default HOCpage;