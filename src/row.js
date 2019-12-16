import React from 'react';
import Name from './name';

 

export default class Row extends React.Component{

    constructor(s){
        super(s)
        this.data =this.props.data;
    }
render(){

    return (   <div className="tableRow">
                     {this.data.map((data,i)=>{


                        return <Name  key= {i} value={data.value} type={data.type} options={data.options} />
                
                     })}
               </div>
    )
}


}
