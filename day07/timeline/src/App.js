import React, { Component } from 'react';
import './App.css';
import activities from './activities.js';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Clock from './components/Clock';

class App extends Component {
  render() {
      return (
          <div className="notificationsFrame">
              <div className="panel">
                  <Header title="Timeline" />
                  <Content activities={activities} />
                  <Clock />
              </div>
          </div>
      )
  }
}

export default App;
