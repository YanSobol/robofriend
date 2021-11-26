import React, {Component} from 'react'

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render() {
        const {hasError} = this.state;
        
        if(hasError) {
            return (
                <h1>Oooops we have a problem</h1>
            );
        }else {
            return this.props.children;
        }
       
    }
}

export default ErrorBoundry;