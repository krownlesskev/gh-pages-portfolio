import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Background from './components/background/background.component';
import HomePage from './pages/home/home.page';
import ContactPage from './pages/contact/contact.page';
import SkillsPage from './pages/skills/skills.page';

import './app.styles.scss';



function App() {
  return (
    <Router>
      <Navbar />
      <Background />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
