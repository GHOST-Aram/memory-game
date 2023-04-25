import Header from './components/header';
import './App.css';
import ImageGrid from './components/image-grid';
import Instruction from './components/instruction';
import Footer from './components/footer';
import { useState } from 'react';

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <div className="App">
      <Header current = {currentScore} best = {bestScore} />
      <Instruction />
      <ImageGrid bestScore ={bestScore} currentScore ={currentScore} setScore = {setCurrentScore} setBest = {setBestScore}/>
      <Footer />
    </div>
  );
}

export default App;
