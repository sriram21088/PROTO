import React from "react";
import C from './chunks';
import GridContext from './GridContext';

export default class Cell extends React.Component{


    constructor(p){
        super(p);
        this.ref = React.createRef();
        this.onDbl = this.onDbl.bind(this);
        this.click = this.click.bind(this);
        this.select = this.select.bind(this);
        this.secondaryEl = this.secondaryEl.bind(this);
        this.secondaryBuffer =  ["_sn","_thumb","_rating"];
        this.state =  {
            isActive:false,
            value: this.props.value || "No data"
        }
    }
    secondaryEl(){
        if(this.props.type=="_sn" || this.props.type =="_thumb"){
           return  ( <C.ChunkSelect
                            value = {this.state.value||"s"}
                            cFn = {(e)=>this.setState({value:e.target.value})}  
                            bFn={(e)=>this.select(e.target.value)}
                            options={[{value:"s",name:"yes"},{value:"n",name:"no"}]}>
                    </C.ChunkSelect>
             )
        }else if(this.props.type == "_rating"){
                        return<C.ChunkInput 
                                    type = "number"
                                    max = {5}
                                    value={this.state.value}  
                                    cFn = {(e)=>this.setState({value:e.target.value})}  
                                    bFn={(e)=>this.select(e.target.value)}>
                        </C.ChunkInput>
        }
    }
    click(e){
        e.stopPropagation();
    }
     
    onDbl(e){
          this.setState((s,p)=>{
              return {isActive:!s.isActive}
          })
          e.preventDefault();
          e.stopPropagation();
    }
    select(e){
        this.setState((s,p)=>{
                    return ({
                        isActive:false,
                        value:s.value
                    })
        })
    }
respEl(){ 
    switch(this.props.type){
            case "_input":
                    return <C.ChunkInput 
                    value={this.state.value}  
                    cFn = {(e)=>this.setState({value:e.target.value})}  
                    bFn={(e)=>this.select(e.target.value)}>
                    </C.ChunkInput>;
             case "_select":
                    return <C.ChunkSelect
                    cFn = {(e)=>this.setState({value:e.target.value})}  
                    bFn={(e)=>this.select(e.target.value)}
                    options={this.props.options}>
                    </C.ChunkSelect>;
            case   "_sn" :case "_thumb":
                return   <C.ChunkYesNo type = {this.props.type} value={this.state.value ||"s"}></C.ChunkYesNo>
                case "_rating" :
                        return (<C.ChunkRating value={this.state.value ||"1"}></C.ChunkRating>)


    }
   
}
componentDidMount(){
    if(!this.props.header){
        this.ref.current.addEventListener("dblclick",this.onDbl);
        this.ref.current.addEventListener("click",this.click);
    }

    
}
componentDidUpdate(p,s){
    if(s.isActive){
       // this.props._current(this);
    }
}

render(){
       let el;
       if(this.state.isActive){
                if(this.secondaryBuffer.indexOf(this.props.type) !== -1){
                      el = this.secondaryEl();
                }else{
                    el  =  this.respEl();
                }

                
       }else{
        if(this.props.type =="_sn" || this.props.type == "_rating" || this.props.type== "_thumb"){
              el =  this.respEl();
        }else{
            el  = this.state.value;
        }
              
    }
    
    return  <GridContext.Consumer>
               {(value)=>{
                     if(this.state.isActive){
                        value(this);
                     }
                    return <div ref= {this.ref} className= {this.props.header?"cell header":"cell"} >
                                 { el}                

                    </div>
               }}
       

     </GridContext.Consumer>
        
           
  
    
}
    
}