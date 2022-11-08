import './App.css';
import LevelUpQuestionnaire from './pages/level-up-questionnaire/level-up-questionnaire.js'
import NewStudent from './pages/new-student/new-student.js'
import Menu from './pages/menu/menu'
import Instructor from './pages/instructor/instructor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './pages/breakdown/breakdown';
import BreakdownApp from './pages/breakdown/breakdown.js';
import Breakdownyes from './pages/breakdown/breakdownYes';
import Breakdownno from './pages/breakdown/breakdownNo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}/>
        <Route path="/newstudent" element={<NewStudent />}/>
        <Route path="/levelupquestionnaire" element={<LevelUpQuestionnaire />}/>
        <Route path="/instructor" element={<Instructor />}/>
        <Route path="/returningstudent" element={<BreakdownApp />}/>
        <Route path= "/breakdown" element={<Breakdownyes />}/>
        <Route path= "/breakdownno" element={<Breakdownno />}/>
      </Routes>
    </Router>
  );
}

export default App;
