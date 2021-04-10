import React, { Component } from "react";
import errors from '../utils'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // errors()
    }

    async componentDidMount() {
        errors()
        console.log(this.props.match.params.id)
    }

    render() {
        return <h2>Product #{this.props.match.params.id}</h2>;
    }
}

export default Product