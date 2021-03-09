import React from 'react';
import Nav from './components/Nav';
import Topics from './components/Topics';
import './App.css';

function App() {

  const topicTitle1 = "Tech";
  const topicTitle2 = "Sports";
  const topicTitle3 = "Space";
  const topicTitle4 = "Education";
  const topicTitle5 = "Economy";

  return (
    <div className="app">
      <div className="Header">
        <h1>What If?!</h1>
      </div>
      
      <div className="homeScreen">
        <Topics 
        topic1={topicTitle1} 
        topic2={topicTitle2} 
        topic3={topicTitle3} 
        topic4={topicTitle4} 
        topic5={topicTitle5} />
      </div>

      <div className="nav">
        <Nav />
      </div>
    </div>
  );
}

export default App;
