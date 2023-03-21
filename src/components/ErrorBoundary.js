import React, {Component} from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError: true,
        error: "",
        message: ""
    }

    componentDidCatch(error, info) {
        console.log(this.props.children)
        this.setState({hasError: true, error: error, message: info})
    }

    renderController = () => {
        if(this.state.hasError) {
            return (
                <>
                <h1>{this.state.error}</h1>
                <p>{this.state.message}</p>
                </>
                
            )
        }
        return this.props.children
    }
    
    render() {
        
        return this.renderController()
    }
}