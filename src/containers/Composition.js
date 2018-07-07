import React, { Component }      from 'react';
//import Todos      from '../components/todo/Todos';

const Chat = () => 
  <div className="Chat">
    <h1>Chat</h1>
  </div>

const Contacts = () => 
  <div className="Contacts">
    <h1>Contacts</h1>
  </div>

const FancyBorder = (props) => (
  <div className={'FancyBorder FancyBorder-' + props.color}>
    <p>We recommend that such components use the special children prop <code>props.children</code> to pass children elements directly into their output:</p>
    <p>Anything inside the FancyBorder JSX tag gets passed into the FancyBorder component as a children prop.</p>

    {props.children}

  </div>
)

//pass arbitrary children to them by nesting the JSX:
const Welcome = () => (
  <FancyBorder color="blue">
    <h1 className="Dialog-title">Welcome</h1>

    <p className="Dialog-message">
      Thank you for visiting our spacecraft!
    </p>
  </FancyBorder>
);//

/*
While this is less common, sometimes you might need multiple “holes” in a component. In such cases you may come up with your own convention instead of using children:
{props.left}
<SplitPane left={ <Contacts /> } right={ <Chat /> } /> 
*/
const SplitPane = (props) => (
  <div className="SplitPane">
    <div className="SplitPane-left">
      {props.left}
    </div>
    <div className="SplitPane-right">
      {props.right}
    </div>
  </div>
);//


/*
Sometimes we think about components as being “special cases” of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.

In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:
*/
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}//

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />

  );
}

//Composition works equally well for components defined as classes:
function DialogShow(props) {
  return (
    <FancyBorder color="blue">
      <p>1 child which is an array with 3 elements</p>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}//

class SignUpDialog extends Component {
  state = {login: ''};

  render() {
    return (
      <DialogShow title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login}
               onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </DialogShow>
    );
  }

  handleChange = (e) => {
    this.setState({login: e.target.value});
  }

  handleSignUp = () => {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

const CompositionWrapper = () => 
  <div>
    <FancyBorder color={'red'}>
      <h1>Fancy</h1>
    </FancyBorder>

     <Welcome />

    <SplitPane
      left={ <Contacts /> }
      right={ <Chat /> } 
    />

    <div style={{clear: "both"}} />
    
    <WelcomeDialog />

    <SignUpDialog />
  </div>

export default CompositionWrapper;