
import React from 'react';
import Grid from './Grid';
import GridContext from './GridContext'
class App extends React.Component {
   constructor(p){
     super(p);
     this.activeMode = false;
     this.ref = React.createRef(); 
   }
 componentDidMount(){
   document.body.addEventListener("click",(e)=>{
     console.clear();
     console.log("main...");
      if(this.ref.current){
        this.ref.current.setState({
          isActive:false
        })
      }
    
   },false)
 }
 componentWillUnmount(){

 }
  render(){
   
    return (  <GridContext.Provider value={(comp)=>this.ref.current =comp}>
                  <Grid></Grid>
              </GridContext.Provider>);
  }
 
}

export default App;
