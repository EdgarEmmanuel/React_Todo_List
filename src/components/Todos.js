import React from 'react';
import '../css/Todos.css';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends React.Component{
    render(){
        return this.props.data.map((todo,id) =>{
            return <TodoItem delete={this.props.del} key={id} 
            change={this.props.change} data={todo} />
        });
    }
}


Todos.propTypes = {
    data : PropTypes.array.isRequired,
}

export default Todos;