import React, { Component } from "react";
import errors from "../utils";

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        errors('Employee')
        console.log("Employee ID " + this.props.match.params.name)
    }

    render() {
        return <h2>Employee {this.props.match.params.name}</h2>;
    }
}

export default Employee