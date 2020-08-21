import React from 'react';
import '../css/form.css';

class Form extends React.Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="text" className="from-control" />
                <button className="btn btn-primary">SUBMIT</button>
            </form>
        )
    }
}

export default Form;