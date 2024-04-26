import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CalcBox from './components/CalcBox/CalcBox';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>Calculator App</div>
    <Routes>
      <Route path='/' element={<CalcBox />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
