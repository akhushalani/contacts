import React from 'react';
import ContactList from './ContactList';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>contacts</p>
        <ContactList />
      </header>
    </div>
  );
}

export default App;
