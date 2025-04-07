import { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.log("Error Caught error boundry component", error, info);
    }
    render() {
        if (this.state.hasError) {
            // return alert("Something went wrong")
            return <h2 style={{ color: "red" }}> something went wrong...</h2>
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundry;