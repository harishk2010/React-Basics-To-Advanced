import React, { Component } from 'react'

class EventBinding extends Component{
    constructor(){
        super()

        this.state={
            message:"Hello"
        }
        this.handleClick=this.handleClick.bind(this)

    }
    handleClick(){
        this.setState({
            message:"Button clicked"

        })
    }
    orHnadleCLick=()=>{
        this.setState({
            message:"Button clicked"
            })
    }


    render(){
        return(
           <div>
             <h1>{this.state.message}</h1>
             <button onClick={this.handleClick.bind(this)}>Click event bind</button> {/*1st method*/}
             <button onClick={()=>this.handleClick()}>arrow bind</button>  {/*2nd method*/}
             <button onClick={this.handleClick}>constructor bind</button>  {/*3rd method works as it is binded already in the constructor*/}  {/*2nd method*/}
             <button onClick={this.orHnadleCLick}>arrow function in constructor</button>  {/*3rd method works as it is binded already in the constructor*/}  {/*2nd method*/}
           </div>
        )
    }
}
export default EventBinding;
