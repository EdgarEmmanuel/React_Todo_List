import React from 'react';
import '../css/form.css';

class Form extends React.Component{
    state ={
        title:''
    }

    onchange=(event)=>{
        this.setState({title: event.target.value});
    }

    OnSub = (e) =>{
        e.preventDefault();

        //send the data 
        this.props.childs(this.state.title);

        //clear the field 
        this.setState({title:''});
    }

    render(){
        return(
            <form onSubmit={this.OnSub}>
                <input onChange={this.onchange} type="text" name="title" value={this.state.title} placeholder="text" className="from-control" />
                <button className="btn btn-primary">SUBMIT</button>
            </form>
        )
    }
}

export default Form;