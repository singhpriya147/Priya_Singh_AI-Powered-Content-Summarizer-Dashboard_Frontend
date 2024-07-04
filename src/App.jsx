

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

import Auth from './components/Auth';
import './index.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />} />
      
      </Routes>
    </Router>
  );
}

export default App;
