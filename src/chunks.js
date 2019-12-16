import React from "react";
import Yes from './tick.png';
import No from './cancel.png';
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
                defaultValue={props.value}
                onChange = {props.cFn}  
                onBlur={props.bFn}>
                    {
                        props.options.map((opt,i)=>
                                    <option key={opt.value} 
                                            value={opt.value}>
                                                {opt.name}
                        </option>)
                    }


        </select>    
    
    )
    
    }


    function ChunkYesNo(props){
        console.log("props.;;;;;",props.value)
             const url=  props.value =="s"?Yes:No;
                     return(<img src={url}/>

                     
       )

    }

     

export default {ChunkInput,ChunkSelect,ChunkYesNo };