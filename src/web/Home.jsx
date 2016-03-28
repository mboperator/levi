import React from 'react';

import TodoList from 'components/TodoList';
import { Interface as TodoInterface } from 'modules/todo';

@TodoInterface('todos')
export default class TodosContainer extends React.Component {
  static propTypes = {
    todos: React.PropTypes.object,
  };

  componentDidMount() {
    /* Kickoff Fetch Todos */
  }

  render() {
    return (
      <TodoList {...this.props.todos} />
    );
  }
}