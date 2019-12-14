import React from "react";

export default class Name extends React.Component{


    constructor(p){
        super(p);
        this.state =  {
            isActive:false,
            value:this.props.value
        }
        this.ref = React.createRef();
        this.onDbl = this.onDbl.bind(this);
        this.select = this.select.bind(this);
    }
    onDbl(){
          this.setState((s,p)=>{
              return {isActive:!s.isActive}
          })
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
    return <input 
                    value={this.state.value}  
                    onChange = {(e)=>this.setState({value:e.target.value})}  
                    onBlur={(e)=>this.select(e.target.value)}>

             </input>;
}
componentDidMount(){
    this.ref.current.addEventListener("dblclick",this.onDbl)
}

render(){
        const  el = this.state.isActive?this.respEl():this.state.value;
           return <div ref= {this.ref} className="row">
                              { el}                
               
               </div>
  
    
}
    
}