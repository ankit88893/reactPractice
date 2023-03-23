import React, { Component } from "react";
import Nav from "./Nav";


class LifeCycle extends Component{
    constructor() {
        super();
        this.state = {
            show: false,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentdidmount")
    }

    render() {
        console.log("render");
        return (
            <div>
                <h2>Life cycle example</h2>
                {this.state.show ? <div> working toogle</div> : null}
                
                <button onClick={ ()=> this.setState({ show: !this.state.show })}>tooglebar</button>
            </div>
        );
    }


}
export default LifeCycle;