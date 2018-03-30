import React, { Component, PureComponent } from 'react';

// installed component

// https://60devs.com/pure-component-in-react.html
// https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81

/*
  Parent component sets state passing props down to children causing re-renders (update phase)
*/

//if change to Comoonent - re-renders.  mutate original state with push method
class PureItemList extends Component{
  render(){
    let { items } = this.props;
    
    console.log('PROPS RENDER ITEMLIST: ', items)
    
    return (
      <div>
        { items.map( (el, i) => <p key={i}>{el}</p> ) }
      </div>
    )
  }
}//

class PureHash extends PureComponent{
  /*
    PureComponent won't re-render if same object.  Uses immutability

    PureComonent does SCU to stop unnecessary re-renders.  does shallow comparison when just Component allow to exit update life cycle:
    React don't deeply compare props, so when props are updated it assumes we need to re-render
  */

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('BOOLEAN ---> ', this.props.hash !== nextProps.hash);
  //   if(this.props.hash !== nextProps.hash) return true
  //   
  //   return false;
  // }
  componentWillReceiveProps(nextProps) {
    console.log('CWRP nextProps hash: ', nextProps)
  }
  render(){
    let { hash } = this.props;
    
    console.log('%c HASH RENDER PROPS: ', 'background: lime', hash)

    return (
      <div>
        { hash.map( (el, i) => <p key={i}>{el.name}</p> ) }
      </div>
    )
  }
}//

class Sample extends Component{
  state = { 
    items: ['aaa', 'bbb', 'ccc'],
    hash: [{name:'zzz'}, {name:'yyy'}, {name:'xxx'}]
  };

  handleClick = () => {
    let { items } = this.state;
    // no re-render when Pure
    items.push('new-item')
    this.setState({ items })

    // copied - re-render
    //prevState.items.concat(['VVV'])

    // copied - re-render 
    // this.setState((prevState) => {
    //   return {
    //     items: [
    //       ...this.state.items,
    //       'zzz'
    //     ]
    //   }
    // })
  }

  addHash = () => {
    let { hash } = this.state;
    hash.push({name: 'new hash'})
    this.setState({ hash })
  }

  render(){
    return(
      <div>
        <PureItemList items={this.state.items} />
        <button onClick={this.handleClick}>click</button>

        <PureHash hash={this.state.hash} />
        <button onClick={this.addHash}>click</button>

        <p>PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won’t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called</p>
        <p>Shallow Comparison 101 - When comparing previous props and state to next, a shallow comparison will check that primitives have the same value (eg, 1 equals 1 or that true equals true) and that the references are the same between more complex javascript values like objects and arrays.</p>
        <p>Never MUTATE - mutate objects in a parent component, your “pure” child components wouldn’t update.</p>
        <p>Comparing primitives and object references is an incredibly cheap operation. If you have a list of child objects and one of the children updates, doing a check on their props and state is lightning fast compared to the cost of re-rendering each one.</p>
        <p>do this: CommentItem likeComment={this.likeComment} userID=user.id /</p>

        <p>PureComponent does shallow comparison, changes inside props or state will be ignored</p>
        <p>A PureComponent will always re-render if the state or props reference a new object. </p>
        <p>It is important to remember, that PureComponent skips the re-render operation not only for component itself, but also for all its children, so the best use case for PureComponent are presentational components which have no child components and no dependencies on the global state in the application.</p>
      
      </div>
    )
  }
}

export default Sample;