import React from 'react';
 import Body from './body';
 import Header from "./header";
window.R  = React;


export default  class Grid extends React.Component{

    render(){
            return (<> 
                    <Header></Header> 
                    <Body></Body>
                    </>
                   )

    }
}