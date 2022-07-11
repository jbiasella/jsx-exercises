import React from "react";

export default class HelloWorld extends React.Component{
    sum(a, b) {
      return  a + b
    }
    
    
    
    render(){
        return <h2>{this.sum(3, 4)}</h2>
    }
}
