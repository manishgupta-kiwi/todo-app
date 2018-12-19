import React, {Component} from 'react';

class AddTodo extends Component{
    state={
        task:null,
        status:'active',
        isDisabled:false,
    }

    changeHandler=(e)=>{
        document.getElementById('addbutton').disabled=false;
        this.setState({
            task:e.target.value,
            isDisabled:false,
        })
        
    }
    addHandler=()=>{
        document.getElementById('addbutton').disabled=!this.state.isDisabled;
        this.setState({
            isDisabled:true,
            task: null,
        });
        this.props.add(this.state);
        document.getElementById('first_name2').value=null;
        
        
    }
    render(){
        console.log(this.state.isDisabled);

        return(
            <div className="row">
            <div className="input-field col s10">
              <input id="first_name2" type="text" className="validate" onChange={this.changeHandler} style={{color:'white',fontSize:'2rem'}}/>
            </div>
            <div className="col s2"><button className='btn-floating btn-large waves-effect waves-light red' onClick={this.addHandler} id='addbutton'><i className="material-icons">add</i></button></div>
          </div>
        )
    }
}

export default AddTodo;