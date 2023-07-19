import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sing_in from './Component/Sing_in';
import Home from './Component/Home';

function App() {
  return (
    <>
      <Router>
        <div >
          <Routes>
            <Route path='/' element={<Sing_in />}></Route>
            <Route path='/Home' element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
