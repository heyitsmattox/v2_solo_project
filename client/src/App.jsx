import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BathroomContextProvider } from './context/BathroomsContext';
import Home from './routes/Home';

const App = () => {

  return (
    <BathroomContextProvider>
  <div className='container'>
    <Router>
      <Routes>
        <Route exact path ='/' Component={Home} />
        {/* ADD OUR OTHER ROUTES HERE */}
        {/* ADD OUR OTHER ROUTES HERE */}
      </Routes>
    </Router>
  </div>
    </BathroomContextProvider>

  )
}

export default App;