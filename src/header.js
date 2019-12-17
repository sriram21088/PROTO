import React from 'react';
import Row from './row';
import Cell  from './cell';

export default class Header extends Row{
constructor(p){
super(p);
this.data   = 
[
    {"value" : "NAME","type":"_header"},
    {"value" : "OPTED","type":"_header"},
    {"value":"NUMBER OF ELEMENTS","type":"_header"},
    {"value":"LANGUAGE","type":"_header" }
  
  
  
  ];

}


render(){
    return (   <div className="tableRow">
                    {this.data.map((data,i)=>{
                            return <Cell  key= {i} 
                                        value={data.value} 
                                        type={data.type} 
                                        header = {true}
                                        options={data.options} />

                    })}
    </div>   )        

}

}






