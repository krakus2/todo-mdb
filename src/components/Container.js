import React, { Component } from 'react';
import '../styles/Container.css'
import Todo from './Todo'
import { CSSTransitionGroup } from 'react-transition-group'

class Container extends Component {
  state = {
    counter: 0
  }

addTodo = () => {
  const { counter } = this.state
  this.setState({ counter: counter + 1 })
}

removeTodo = () => {
  const { counter } = this.state
  if(counter > 0)
    this.setState({ counter: counter - 1 })
}

clearTodo = () => {
  this.setState({ counter: 0 })
}

  render() {
    const { counter } = this.state

    const style = {
      borderRadius: "2px"
    }

    return (
      <div className="container">
        <div className="buttonRow" style={(!counter) ? style : {}}>
          <button onClick={this.addTodo} className="buttonRow__button">
            Add
          </button>
          <button onClick={this.removeTodo} className="buttonRow__button">
            Remove
          </button>
          <button onClick={this.clearTodo} className="buttonRow__button">
            Clear
          </button>
        </div>
        <CSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className='todoRow'
          component='div'
          transitionName='todoRow'
        >
          {
            [...Array(counter)].map((elem, i) => <Todo key={i} iter={i+1} /> )
          }
        </CSSTransitionGroup>
      </div>
    );
  }

}

export default Container;
