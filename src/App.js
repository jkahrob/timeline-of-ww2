import React from 'react';
import Timeline from './Timeline';
import jsonData from './ww2events.json';
import './App.css';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return (
        <div className="app-container">
            <Header/>
            <h1>World War 2: Timeline of Events</h1>
            <Timeline events={jsonData} />
            <Footer/>
        </div>
    );
};

export default App;