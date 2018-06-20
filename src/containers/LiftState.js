import React, { Component }      from 'react';

const toCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

const toFahrenheit = celsius => (celsius * 9 / 5) + 32;

const BoilingVerdict =  ( { celsius } ) => 
    (celsius >= 100) ? <p>The water would boil</p> : <p>The water would not boil</p>;

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);

  if ( Number.isNaN(input) ) return '';

  const output  = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    state = {temperature: ''};

    handleChange = (e) => this.props.onTemperatureChange(e.target.value);

  render() {
    const { temperature, scale } = this.props;

    return (
      <fieldset> 
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}//

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange      = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange   = this.handleFahrenheitChange.bind(this);
    this.state                    = {temperature: '', scale: 'c'};
  }
  // handleCelsiusChange(temperature) {
  //   this.setState((prevState, props) => {
  //     console.log('prevState -> ', prevState);
  //     console.log('props -> ', props);
  //     return {scale: 'c', temperature} 
  //   })
  // }
  handleCelsiusChange(temperature) {
    this.setState((prevState, props) => ( {scale: 'c', temperature} ));
  }

  handleFahrenheitChange(temperature) {
    this.setState( (prevState, props) => ( {scale: 'f', temperature} ));
  }

  render() {
    const scale       = this.state.scale;
    const temperature = this.state.temperature;
    const celsius     = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit  = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict celsius={parseFloat(celsius)} />
        <p>we want these two inputs to be in sync with each other. When we update the Celsius input, the Fahrenheit input should reflect the converted temperature, and vice versa. In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. </p>

        <p>We know that props are read-only. When the temperature was in the local state, the TemperatureInput could just call this.setState() to change it. However, now that the temperature is coming from the parent as a prop, the TemperatureInput has no control over it.</p>

        <p>In React, this is usually solved by making a component "controlled". Just like the DOM INPUT accepts both a value and an onChange prop, so can the custom TemperatureInput accept both temperature and onTemperatureChange props from its parent Calculator.</p>

        <p>Now, when the TemperatureInput wants to update its temperature, it calls this.props.onTemperatureChange:</p>

      </div>
    );
  }
}
const LiftState = () => <Calculator />
 
export default LiftState;