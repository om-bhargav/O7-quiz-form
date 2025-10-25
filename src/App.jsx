import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Leaderboard from "./pages/leaderboard";
import UserDetails from "./pages/user-details";
import DisplayQuiz from "./pages/display-quiz";

function App() {
  // const [currentIndex,setCurrentIndex] = useState([]);
  // const [answers, setAnswers] = useState(options);
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/leaderboard' element={<Leaderboard/>}></Route>
      <Route path='/score' element={<UserDetails/>}></Route>
      <Route path='/quiz-page' element={<DisplayQuiz/>}></Route>
    </Routes>
  )
}

export default App
