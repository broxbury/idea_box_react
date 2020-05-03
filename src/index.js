import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todo-list/todolist';
import AddToDo from './AddToDO/addToDo.js';


import './index.css'

class App extends React.Component {
 constructor() {
   super()
   this.state = {
     todos: []
   }
 }

 render() {
   return(
     <section>
      <AddToDo addTodoFn={this.addTodo} />
      <TodoList todos={this.state.todos} updateTodoFn={this.updateTodo} deleteTaskFn={this.deleteTask}/>
     </section>
   )
 }

 componentDidMount = () => {
   const todos = localStorage.getItem('todos')
    if (todos) {
      const savedToDos = JSON.parse(todos)
      this.setState({todos: savedToDos})
    } else {
      console.log('no todos')
      }
 }

  addTodo = async (todo) => {
    await this.setState({todos: [...this.state.todos, {
      text: todo,
      isComplete: false
    }]})
  
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(item => {
      if (item === todo)
      return {
        text: item.text,
        isComplete: !item.isComplete
      }
      else
      return item
    });
    await this.setState({todos: newTodos})
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  deleteTask = async (todo) => {
    const newTodos = this.state.todos.filter(item => item !== todo)
    await this.setState({todos: newTodos})
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }
}

ReactDOM.render(<App />, document.getElementById("root"));



  
  // ========================================
