import React from "react";

export default class HelloWorld extends React.Component{
    hello(name) {
      return  'Hello, ' + name;
    }
    
    
    
    render(){
        return <h1>{hello(name)}</h1>
    }
}
//return Hello, undefined