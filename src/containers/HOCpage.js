import React, { Component }      from 'react';
import NameList       	from '../components/NameList'; 
import HOCuser       	  from '../components/HOCuser'; 
import HOCState       	from '../components/HOCuserState'; 
import Upper       		  from '../components/UpperCaseIt'; 
import Container       	from '../components/recompose/Container'; 
//import HasPropsShow       	from '../components/HasPropsShow';  
import TimeShow         from '../components/TimeShow'; 

//var people = [{name:'aaa'}, {name:'bbb'}, {name:'ccc'}, ]

class HOCpage extends Component {
  render() {
    return (
      <div>
        <NameList name={'aaa'} /> 
        <HOCuser user={'julio'} />
        <HOCState />
        <Container />
        <Upper user="julio cornelio" />
        <TimeShow />
      </div>
    );
  }
}

export default HOCpage;