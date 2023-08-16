import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Error from '../Component/Error';

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </>
  )
}

export default Routing