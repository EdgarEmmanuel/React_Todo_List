import React from 'react';
import './App.css';
import Todos from './components/Todos';



class App extends React.Component{
  state={
    todos: [
      {
        id:1,
        title:"Read Bible",
        completed:false
      },
      {
        id:2,
        title:"Go Church",
        completed:true
      },
      {
        id:3,
        title:"Go Simplon",
        completed:true
      },
    ]
  }

  // modify = (id) => {
  //   this.setState({todos: this.state.todos.map(todo => {
  //     if(todo.id === id){
  //       return {
  //         ...todo,
  //         completed:!todo.completed
  //       }
  //     }
  //     return todo
  //   })});
  // };


  modify = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed=!todo.completed;
      }
      return todo
    })});
  };

  delete = (id) =>{
    //var array = this.state.todos.filter(todo => todo.id!==id );
    this.setState({todos: this.state.todos.filter(todo => todo.id!==id )});
  }
 
  render(){
    return(
      <div className="App">
          <Todos del={this.delete} change={this.modify} data={this.state.todos} />
      </div>
    )
  }


}

export default App;
