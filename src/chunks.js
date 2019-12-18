import React from "react";
import Yes from './tick.png';
import No from './cancel.png';
import Star from './star.png'
import  Up from './up.png';
import Down from './down.png';
  function ChunkInput(props){
 
return (
    <input autoFocus
            type = {props.type}
            max = {props.max}
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
        const url=  props.value =="s"?props.type=="_thumb"?Up:Yes:props.type =="_thumb"?Down: No;
         return(<img src={url}/>

                     
       )

    }

    function ChunkRating(props){
         const val  =props.value?Number(props.value):1;
          let  i =0,arr = [];

          for(i=0;i<val;i++){
                    arr.push(<img src={Star} key={i}/>);
          }
         return(arr)
    }   
     

export default {ChunkInput,ChunkSelect,ChunkYesNo,ChunkRating };