import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ReadPage from './pages/ReadPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<ReadPage/>} path="/"/>
        <Route element={<CreatePage/>} path="/create"/>
        <Route element={<UpdatePage/>} path="/update/:id"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;