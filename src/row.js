import React from 'react';
import Cell from './cell';

 

export default class Row extends React.Component{

    constructor(s){
        super(s)
        this.data =this.props.data;
    }
render(){

    return (   <div className="tableRow">
                     {this.data.map((data,i)=>{
                              return <Cell  key= {i} 
                                            value={data.value} 
                                            type={data.type} 
                                            options={data.options} />
                
                     })}
               </div>
    )
}


}
