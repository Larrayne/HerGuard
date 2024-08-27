import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import FAQ from './FAQ';
import ShareLocation from './ShareLocation';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />  {/* Temporarily set a path you want to test as the default route. I have put Login for simplicity purposes but it can be changed*/}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/ShareLocation' element={<ShareLocation/>}/>
        <Route path='/FAQ' element={<FAQ />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
