import React from 'react';

class AddToDo extends React.Component {
 constructor() {
   super() 
   this.state = {
     todo: ''
   }
 }
render() {
  return (
    <section className="todo-list">
      <form onSubmit={(e) => this.updateState(e)}>
        <input className="task-input" id="input" onChange={(e) => this.updateInput(e)}type="text"></input>
        <button type="submit">Add to do</button>
      </form>
    </section>
  )
}
updateState = (e) => {
  e.preventDefault()
  this.props.addTodoFn(this.state.todo)
  document.getElementById('input').value = '';
}

updateInput = (e) => {
  this.setState({todo: e.target.value})
}

}


export default AddToDo;