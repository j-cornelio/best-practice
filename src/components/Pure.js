import React, { Component, PureComponent } from 'react';
import Vlad from 'vlad-component';
// https://60devs.com/pure-component-in-react.html
// https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81
class ItemList extends PureComponent{
  render(){
    let { items } = this.props;
    console.log(items)
    return (
      <div>
        { items.map( (el, i) => <p key={i}>{el}</p> ) }
      </div>
    )
  }
}//

class PureSample extends Component{

  state = { items: ['aaa', 'bbb', 'ccc'] };

  handleClick = () => {
    // no re-render
    // items.push('new-item')
    // this.setState({ items })

    // good - prevState.items.concat(['VVV'])

    this.setState((prevState) =>{
      return {
        items: [
          ...this.state.items,
          'zzz'
        ]
      }
    })
  }

  render(){
    return(
      <div>
        <Vlad />
        <p>PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won’t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called</p>
        <p>Shallow Comparison 101 - When comparing previous props and state to next, a shallow comparison will check that primitives have the same value (eg, 1 equals 1 or that true equals true) and that the references are the same between more complex javascript values like objects and arrays.</p>
        <p>Never MUTATE - mutate objects in a parent component, your “pure” child components wouldn’t update.</p>
        <p>Comparing primitives and object references is an incredibly cheap operation. If you have a list of child objects and one of the children updates, doing a check on their props and state is lightning fast compared to the cost of re-rendering each one.</p>
        <p>do this: CommentItem likeComment={this.likeComment} userID=user.id /</p>

        <p>PureComponent does shallow comparison, changes inside props or state will be ignored</p>
        <p>A PureComponent will always re-render if the state or props reference a new object. </p>
        <p>It is important to remember, that PureComponent skips the re-render operation not only for component itself, but also for all its children, so the best use case for PureComponent are presentational components which have no child components and no dependencies on the global state in the application.</p>
        <button onClick={this.handleClick}>click</button>
        <ItemList items={this.state.items} />
      </div>
    )
  }
}

export default PureSample;