import React, { Component } from 'react';

// LifecycleDemo component as a class component
// Demonstrates componentDidMount and componentWillUnmount lifecycle methods
class LifecycleDemo extends Component {
  // Lifecycle method called after the component is mounted
  componentDidMount() {
    console.log('LifecycleDemo component has mounted!');
  }

  // Lifecycle method called before the component is unmounted
  componentWillUnmount() {
    console.log('LifecycleDemo component will unmount!');
  }

  render() {
    return (
      <div className="bg-gray-100 p-6 mt-8 rounded-xl border">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Component Lifecycle Demo</h3>
        <p className="text-gray-600">Check the console for lifecycle method logs.</p>
      </div>
    );
  }
}

export default LifecycleDemo;