// src/App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import History from './components/History';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
