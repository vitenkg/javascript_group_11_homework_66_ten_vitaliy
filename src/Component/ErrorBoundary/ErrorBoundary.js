import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: '',
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hesError: true, errorMessage: error})
    }

    render() {
        if (this.state.hasError) {
            return <div>Something Wrong happened</div>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;