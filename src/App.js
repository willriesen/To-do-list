import React, { Component } from 'react';
 
 import './App.css';
 import ToDo from './components/ToDo.js';

class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ],
        newTodoDescription: ''
     };
   }
   
   deleteTodo(index) {
        const list = this.state.todos.slice();
        const newList = list.filter((todo, i) => i !== index);
        this.setState({ todos: newList });
   }
 
   handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }
 
   handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newTodoDescription) { return }
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' }); 
   }
 
   toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

   render() {
        return (
            <div className="App">
                <h1>The To Do List</h1>
                <ol>
                    {this.state.todos.map((todo, index) =>
                        <ToDo
                            key={index}
                            description={todo.description}
                            isCompleted={todo.isCompleted}
                            toggleComplete={() => this.toggleComplete(index)}
                            deleteTodo={() => this.deleteTodo(index)}
                        />
                    )}
                </ol>
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <input type="text" placeholder="Insert To Do's Here" value={this.state.newTodoDescription} onChange={(e) => this.handleChange(e)} />
                    <input type="submit" value="Add" />
                </form>

            </div>
        );
    }
}

 export default App;

