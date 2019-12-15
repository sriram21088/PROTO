import React from 'react';
import Name from './name';
 

export default class Row extends React.Component{
render(){

    return (   <div className="tableRow">
                     <Name value="::::" type="_input"></Name>
                     <Name value="::::"  options = {[{value:"one",name:"one"},
                                                     {value:"two",name:"two"}]} type="_select"></Name>
               </div>
    )
}


}
