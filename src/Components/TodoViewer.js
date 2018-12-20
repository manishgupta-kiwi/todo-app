import React from "react";
import Deletemodal from "./modal/Deletemodal";
// import './TodoViewer.css';


const TodoViewer = props => {
    let statusTxt=null;
    if(props.status==='active'){
        statusTxt='Complete';
    }
    else if(props.status==='completed'){
        statusTxt='​RevertCompletion';
    }
    
  return (
    <div><div className=" card-panel z-depth-4" style={{borderRadius:'25px',textShadow: '0px 0px  6px rgba(255,255,255,0.5) '}}>
    <div className="row">
      <div className="col s6">
      <h5 className=" grey-text darken-3" id="linethrough" style={{
        textDecoration: props.status==='completed' ? 'line-through' : 'none',
        textDecorationStyle:'wavy',
        textDecorationColor:'red'
        
      }}>{props.task}</h5>
      </div>
      
      <div className="col s2"><button className="waves-effect waves-red btn-large" style={{borderRadius:'25px',textShadow: '0px 0px  6px rgba(255,255,255,1)'}}
       onClick={props.showModal} >Delete</button></div>
      <div className="col s4"><button className='waves-effect waves-light btn-large'  style={{
        backgroundColor: props.status==='completed' ? 'black' : '#262626',
        borderRadius:'25px',textShadow: '0px 0px  6px rgba(255,255,255,1)',
        
      }} onClick={()=>props.toggleStatus(props.id)}>{statusTxt}</button></div>
    </div>
  </div>
  
  {(props.showDeleteModal===true)?<Deletemodal hide={props.hide} id={props.id} delete={props.delete} />:null}
  </div>
    
  );
};

export default TodoViewer;
