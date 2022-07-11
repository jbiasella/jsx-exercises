import React from "react";

export default class HelloWorld extends React.Component{
    hello(name) {
      return  'Hello, ' + name;
    }
    
    
    
    render(){
        return <h1>{this.hello()}</h1>
    }
}
//return Hello, undefined