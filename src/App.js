import React, { Component } from 'react';
import Tab from './components/tab/Tab';
import './App.css';
 import BackGround from './components/background/background'

class App extends Component {
  render() {
    return (
      <div className="index-main">
        <div className="index-main-body">
        	<div className="index-header">
						<h1 className="logo hide-text">知乎</h1>
						<h2 className="subtitle">与世界分享你的知识、经验和见解</h2>
					</div>
					<Tab />	
        </div>
      </div>
    );
  }
}

export default App;
