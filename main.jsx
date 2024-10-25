import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './src/components/HomePage';
import './style.css'; // Import the CSS file

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>
);