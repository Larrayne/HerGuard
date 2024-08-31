import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import FAQ from './FAQ';
import ShareLocation from './ShareLocation';  
import Support from './Support';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Support />} />  {/* Default route */}
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/ShareLocation' element={<ShareLocation />} />
        <Route path='/FAQ' element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
