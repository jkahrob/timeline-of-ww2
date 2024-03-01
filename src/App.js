import React from 'react';
import Timeline from './Timeline';
import jsonData from './ww2events.json';
import './App.css';
import Header from './Header';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <h1>World War 2: Timeline of Events</h1>
            <Timeline events={jsonData} />
        </div>
    );
};

export default App;