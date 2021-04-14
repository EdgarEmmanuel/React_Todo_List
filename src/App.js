import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from '../src/layout/header';
import Form from '../src/components/form';
import About from '../src/pages/about'
import Axios from 'axios';
import Test from './components/test';

class App extends React.Component{
  state={
    todos: []
  }


  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=2').then((res)=>{
      this.setState({todos:res.data});
    })
  }

  //================================= modify the Todo 
  modify = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed=!todo.completed;
      }
      return todo
    })});
  };

  //========================= delete the Todo 

  delete = (id) =>{
    //var array = this.state.todos.filter(todo => todo.id!==id );
    this.setState({todos: this.state.todos.filter(todo => todo.id!==id )});
  }

  //==================== add Todo 

  addTodo = (title) => {
    const idE = this.state.todos.length+1;
    var obj={
      id:idE,
      title:title,
      completed:false
    };
    this.setState({todos:[...this.state.todos,obj]});
  }
 
  render(){
    return(
      <BrowserRouter>
          <div className="App">
              <Header/>


              <Route exact path="/" render={props=>(
                <React.Fragment>
                    <Form childs={this.addTodo} />
                    <Todos del={this.delete} change={this.modify} data={this.state.todos} />
                    <Test/>
                </React.Fragment>
              )} />

              
              <Route path="/about" render={props=>(
                <React.Fragment>
                        <About/>
                </React.Fragment>
                )}  />

          </div>
      </BrowserRouter>
    )
  }


}

export default App;
