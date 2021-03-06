import React, { Component } from 'react';
import EmployeeList from './employees/EmployeeList';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <EmployeeList />
        <Footer />
      </div>
    );
  }
}

export default App;
