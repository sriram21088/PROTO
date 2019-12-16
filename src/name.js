import React from "react";
import C from './chunks';
import GridContext from './GridContext';

export default class Name extends React.Component{


    constructor(p){
        super(p);
        this.ref = React.createRef();
        this.onDbl = this.onDbl.bind(this);
        this.click = this.click.bind(this);
        this.select = this.select.bind(this);
        this.secondaryEl = this.secondaryEl.bind(this);
        
        this.state =  {
            isActive:false,
            value: this.props.value || "No data"
        }
    }
    secondaryEl(){
        if(this.props.type=="_sn"){
           return  ( <C.ChunkSelect
                            value = {this.state.value||"s"}
                            cFn = {(e)=>this.setState({value:e.target.value})}  
                            bFn={(e)=>this.select(e.target.value)}
                            options={[{value:"s",name:"yes"},{value:"n",name:"no"}]}>
                    </C.ChunkSelect>
             )
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
            case "_sn":
                return   <C.ChunkYesNo value={this.state.value ||"s"}></C.ChunkYesNo>


    }
   
}
componentDidMount(){
    this.ref.current.addEventListener("dblclick",this.onDbl);
    this.ref.current.addEventListener("click",this.click);
}
componentDidUpdate(p,s){
    if(s.isActive){
       // this.props._current(this);
    }
}

render(){
       let el;
       if(this.state.isActive){
                if(this.props.type== "_sn"){
                      el = this.secondaryEl();
                }else{
                    el  =  this.respEl();
                }

                
       }else{
        if(this.props.type =="_sn"){
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
                    return <div ref= {this.ref} className="row">
                                 { el}                

                    </div>
               }}
       

     </GridContext.Consumer>
        
           
  
    
}
    
}