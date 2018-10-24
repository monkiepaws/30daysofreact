import React, { Component } from 'react';
import './App.css';
import activities from './activities.js';
import Header from './Header.jsx';
import Content from './Content.jsx';

class App extends Component {
  render() {
      return (
          <div className="notificationsFrame">
              <div className="panel">
                  <Header title="Timeline" />
                  <Content activities={activities} />
              </div>
          </div>
      )
  }
}

export default App;
