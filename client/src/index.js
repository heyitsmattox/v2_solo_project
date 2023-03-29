import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);

// Legacy code
// ReactDOM.render(<App />, document.getElementById('root'));