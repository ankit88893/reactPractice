import React, { Component} from "react";

class Nav extends Component{
    componentWillUnmount() {
        console.log("componentwillunmount");
    }

    render() {
        return<h3>nav bar</h3>
    }
}

export default Nav;