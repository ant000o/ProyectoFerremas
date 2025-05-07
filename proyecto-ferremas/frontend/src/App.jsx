import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from './Pages/Home'
import { Items } from './Pages/Items';
import { Login } from './Pages/Login';

function App() {
  return (
    <>
    
    <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/Items' element={<Items/>}/>
            <Route path='/Login' element={<Login/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
