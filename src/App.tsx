import './App.css'
import './index.css'
import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro';

function App() {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App