import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoList from '../components/todo'
import * as todoActions from '../actions/todoActions'



class App extends Component {
    render() {

        const todo = this.props.todo; 
        const todoActions = this.props.todoActions
        return (
            <div>
                <TodoList todo={todo} todoActions={todoActions} />
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    todo: state.todo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


