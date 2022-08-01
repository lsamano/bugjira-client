import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TasksPage from './TasksPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
