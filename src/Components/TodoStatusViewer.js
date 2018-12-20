import React from 'react';

const TodoStatusViewer =(props)=>{
    return (<div className='container center' >
            <h6 id='pointer'>total tasks:{props.total}</h6>
            <h6 id='pointer'>active tasks:{props.active}</h6>
            <h6 id='pointer'>completed tasks:{props.completed}</h6>
    </div>)

}

export default TodoStatusViewer