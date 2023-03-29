import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';

const App = () => {
  return <div>
    <Router>
      <Routes>
        <Route exact path ='/' Component={Home} />
        {/* ADD OUR OTHER ROUTES HERE */}
        {/* ADD OUR OTHER ROUTES HERE */}
      </Routes>
    </Router>
  </div>
}

export default App;