import React, { Component } from 'react';

/*
inputs are static elements so could add ref variable
*/

const SPECIALC    = /[^\w\-/ ]/;

// class Validate extends Component{
//   state = { counter: 0 }

//   valid = () => {
//     console.log('STATE; ', this.state);
//     this.setState((state) => {
//       return { counter: state.counter += 1}
//     })
//   }

//   render(){
//     return (
//       <div onClick={this.valid}>
//         {this.props.render(this.state)}
//       </div>
//     )
//   }
// }

class Validation extends Component{
  state = { text: '' }

  show(inputs){
    for(let k in inputs){
      inputs[k].style.border = '1px solid black';
        inputs[k].classList.remove('error');

      if(SPECIALC.test( inputs[k].value )){
        inputs[k].style.border = '2px solid orange';
        inputs[k].classList.add('error');
        inputs[k].nextSibling.innerText = 'special characters';
      }

      if(inputs[k].value.length === 0){
        inputs[k].style.border = '2px solid red';
        inputs[k].classList.add('error');
        inputs[k].nextSibling.innerText = 'required field son';
      }
    }
  }

  render(){
    let obj = null, a='', b='';
    return (
      <div>
        <form>
          <input type="text" ref={(input) => a = input} placeholder="name" />
          <p className="special"></p>

          <br />
          <input type="text" ref={(input) => b = input} placeholder="last" />
          <p className="special"></p>

          <br />
          <button onClick={(e) => {
            e.preventDefault();
              obj = {
                first: a,
                last: b
              };
              this.show(obj);
            }}
          >validate</button>
        </form>
        {/*
  <Validate render={ ({counter}) => {
          return <h1>counter {counter}</h1>
        }} />
        */}
      </div>
    ) 
  }
}

export default Validation;