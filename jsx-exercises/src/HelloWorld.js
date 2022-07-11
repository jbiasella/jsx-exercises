import React from "react";

export default class HelloWorld extends React.Component{
    hello = 'Hello World';
    render(){
        return <h1>{this.hello}</h1>
    }
}