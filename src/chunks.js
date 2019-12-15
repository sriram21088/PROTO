import React from "react";


  function ChunkInput(props){
 
return (
    <input autoFocus
            value={props.value}  
            onChange = {props.cFn}  
            onBlur={props.bFn}>
    </input>    

)

}


function ChunkSelect(props){
 
    return (
        <select autoFocus
                value={props.value}  
                onChange = {props.cFn}  
                onBlur={props.bFn}>
                    {
props.options.map(opt=><option key={opt.value}   value={opt.value}>{opt.name}</option>)
                    }


        </select>    
    
    )
    
    }


export default {ChunkInput,ChunkSelect };