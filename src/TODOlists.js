import React from 'react'
let TODOlists=(props)=>{  

 

    return (<>
          <div className="todo_style">
             <i class="fa fa-times" aria-hidden="true"
             onClick={()=>{props.onSelect(props.id)}}         // props comes from app.js//we write callback ..like arrow function otherwise function call
             />
             <li>{props.txt}</li>
          </div>
       </>
     
    )
}
export default TODOlists;
