import React from 'react';

const Deletemodal =(props)=>{
    return(
      <div className='Modal scale-transition'>
      <h5>Are You Sure ??</h5>
      <button id='confirm' className='waves-effect  btn' onClick={()=>props.delete(props.id)}>delete</button>
      <button  id='cancel' className='waves-effect  btn' onClick={props.hide}>cancel</button>
      </div>
    );

}
export default Deletemodal;
