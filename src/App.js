import React,{ useState} from 'react';
import  './TODO.css'
import TODOlists from './TODOlists'

function App()
{  const [thing, setThing]=useState("");
  const [ items ,setItems]=useState([]);
   
   let handle=(event)=>{
      setThing(event.target.value);
   }
   const change=()=>{
     setItems((olditems)=>{             //put thing(items) in every element in array which are written in input box
       return [...olditems,thing]
        
     });
        setThing("");                        //after put array input box should be empty
   }
    const deleteItems= (id) =>{                  //for delete items
      setItems((olditems)=>{
        return olditems.filter((arrElem,index) => {          // does not print that value which id(comes from todolists) is eqaul to index..except
                                                              // that print whole arry element
            return index!==id;
        });
    });

  }




  return (<div className="main_div">
           <div className="center_div">
       <br/>
       <h1> TODO List</h1>
       <br/>
       <input type="text" placeholder="Add a Item" onChange={handle} value={thing} />
       <button id="btn" onClick={change}> +</button>

       <ol>
         {items.map((evalue,index)=>{
           return <TODOlists  key={index} id={index} txt={evalue}  onSelect={deleteItems}/>
         })}
       </ol>


    </div>
  </div>

  );
  

}

export default App;

