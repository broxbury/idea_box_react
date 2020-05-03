import React from 'react';
import TodoItem from '../todo-list/todoitem';

class TodoList extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {todos} = this.props;
   
    return (
     <section>
       {
         todos.map((todo, index) => {
           return (
             <TodoItem key={index} todo={todo} updateTodoFn={this.updateTodo} deleteTaskFn={this.deleteTask}/> 
           )
           
         })
       }
     </section>
    )
  }
  
  updateTodo = (todo) => {
    this.props.updateTodoFn(todo)
  }

  deleteTask = (todo) => {
    this.props.deleteTaskFn(todo)
  }
}
export default TodoList;

