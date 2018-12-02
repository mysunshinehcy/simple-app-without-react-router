import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
// import About from './pages/About.js';
// import Contact from './pages/Contact.js';
// 线上地址:https://hfpp2012.github.io/simple-app-without-react-router/
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Jumbotron title="Contact" subtitle="Please contact me at hfpp2012@gmail.com"/>
          <Route exact path="/" component={Home}/>
          <Route path="/contact/:id" component={Contact}/>
          <Route path="/about" component={About}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
