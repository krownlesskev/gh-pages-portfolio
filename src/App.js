import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Background from './components/background/background.component';
import HomePage from './pages/home/home.page';

import './app.styles.scss';



function App() {
  return (
    <Router>
      <Navbar />
      <Background />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
