// entry point of the project
import React from "react";
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App.jsx';
import "./styles/global.css"; // Include global styles


// Render the App component into the root div in the index.html
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)