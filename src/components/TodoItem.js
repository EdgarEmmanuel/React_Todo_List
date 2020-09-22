import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component{
    getStyle(){
       if(this.props.data.completed){
           const a= {
               backgroundColor : 'red',
               textDecoration: 'line-through',
           }
           return a;
       }else{
           const a ={ 
               backgroundColor: 'grey',
           }
           return a;
       } 
       
    }

    
    render(){
        return(
            <h3 style={this.getStyle()}>
                <input  type="checkbox" onChange={this.props.change.bind(this,this.props.data.id)} value=""/>{''}
                <p>
                Work : {this.props.data.title}  <br/>
                </p>{''}
                <button onClick={this.props.delete.bind(this,this.props.data.id)}
                 className="btn btn-primary"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </h3>
        );
    }
}

TodoItem.propTypes ={
    data: PropTypes.object.isRequired,
}

// const Styles={
//     backgroundColor: '#f4f4f4',
// }

export default TodoItem;