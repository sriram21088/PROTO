import React from "react";
import C from './chunks';
import GridContext from './GridContext';

export default class Name extends React.Component{


    constructor(p){
        super(p);
        this.state =  {
            isActive:false,
            value:this.props.value
        }
        this.ref = React.createRef();
        this.onDbl = this.onDbl.bind(this);
        this.click = this.click.bind(this);
        this.select = this.select.bind(this);
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
                    value={this.state.value}  
                    cFn = {(e)=>this.setState({value:e.target.value})}  
                    bFn={(e)=>this.select(e.target.value)}
                    options={this.props.options}>
                    </C.ChunkSelect>;        

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
    const  el = this.state.isActive?this.respEl():this.state.value;
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