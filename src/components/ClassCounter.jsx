import React, { Component } from "react";

class ClassCounter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        
    
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })

    }
    incrementFive(){
        // this.increment()
        // this.increment()
        // this.increment()
        

        }

    
    render(){
        return(
            <div>
            {this.state.count}
            <button onClick={()=>this.increment()}>Incremenet</button>
        </div>
        )

    }
}

export default ClassCounter;