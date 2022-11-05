import React, { Component } from "react"

class ErrorBoundary extends Component{
  state = { hasError: false };
  
  
  componentDidCatch(error, errorInfo){
  console.log({error, errorInfo})
  }

  
  static getDerivedStateFromError(error){
    return{
      hasError :true
    };
  }
  render(){
    if(this.state.hasError){
      return (
      <div className="note">
        <h1 className="notes">Oops! something went wrong</h1>
        <p className="notes">Try refreshing the page </p>
        <p className="notes">Or go back to another page</p>
        </div>)
    }
    return this.props.children 
  }
  }

export default ErrorBoundary;