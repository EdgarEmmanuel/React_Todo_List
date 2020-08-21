import React from 'react';
import './App.css';
import Todos from './components/Todos';



class App extends React.Component{
  state={
    todos: [
      {
        id:1,
        title:"Go Gym",
        completed:false
      },
      {
        id:2,
        title:"Go Gym",
        completed:true
      },
      {
        id:3,
        title:"Go Gym",
        completed:true
      },
    ]
  }


  modify = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed:!todo.completed
        }
      }
      return todo
    })});
  };
 
  render(){
    return(
      <div className="App">
          <Todos change={this.modify} data={this.state.todos} />
      </div>
    )
  }


}

export default App;
