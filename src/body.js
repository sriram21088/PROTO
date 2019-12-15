import React from "react";
import Row from './row';


export default class Body extends React.Component{
 constructor(p){
     super(p);
      this.state ={data:[]}
    
    }
    componentDidMount(){
                fetch('http://localhost:3004/data',).then((res)=>{
                      res.json().then((data)=>{
                              this.setState({data:data})

                      })

                })


    }

render(){
        return    (<div className="tableBody">
                        {this.state.data.map((d,i)=><Row key= {i} data= {d}/>)}
                    </div>

        )

}



}