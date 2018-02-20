import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Todo from 'components/todo';

const TodosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


class TodosList extends Component {
  static propTypes = {
    loadTodos: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }
  static defaultProps = {
    error: null,
  }

  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    const { todos, loading, error } = this.props;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
      <TodosContainer>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))})
      </TodosContainer>
    );
  }
}

export default TodosList;
