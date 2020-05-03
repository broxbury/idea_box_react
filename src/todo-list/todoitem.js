import React from 'react';
import deleteImg from '../delete-sign.png'

class TodoItem extends React.Component {
  constructor() {
    super()
  }
render() {
  const {todo} = this.props
  return (
    <section className="display-tasks">
      <p>{todo.text}</p>
      <input onChange={this.toggleComplete} type="checkbox" checked={todo.isComplete}></input>
        <img onClick={this.deleteTodo} className="delete-task" src={deleteImg}></img>
    </section>
  )
}

toggleComplete = () => {
  this.props.updateTodoFn(this.props.todo)
}

deleteTodo = () => {
  this.props.deleteTaskFn(this.props.todo)
}

  
}
export default TodoItem;