import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

import HomePage from './pages/Home';
import ClassPage from './pages/classes';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/classes" element={<ClassPage />} />
      </Routes>
    </div>
  )
}

// router should wrap the whole app
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}
