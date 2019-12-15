import React from 'react';
import Name from './name';
 

export default class Row extends React.Component{
render(){

    return (   <div className="tableRow">
                    <Name  value={"Sam"} type="_input"></Name>
                    <Name  value={"one"}  options = {[{value:"one",name:"one"},
                                        {value:"two",name:"two"}]} 
                            type="_select">

                    </Name>
                    <Name   value={"Spanish"}  options = {[{value:"Spanish",name:"Spanish"},
                                             {value:"English",name:"English"}]} 
                                type="_select">
                    
                    </Name>
               </div>
    )
}


}
