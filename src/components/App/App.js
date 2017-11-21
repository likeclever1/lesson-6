import React from 'react';
import Market from '../Market';
import Farm from '../Farm';
import Budget from '../Budget';
import './App.css'

const App = () => (
    <div className="app">
        <Market />
        <Farm />
        <Budget />
    </div>
);

export default App;