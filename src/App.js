import Header from './components/header';
import './App.css';
import ImageGrid from './components/image-grid';
import Instruction from './components/instruction';
import Footer from './components/footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Instruction />
      <ImageGrid/>
      <Footer />
    </div>
  );
}

export default App;
