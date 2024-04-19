import logo from './logo.svg';
import './App.css';
import './reset.css'


import Navbar from './components/navbar/navbar'

function App() {
  return (
    <>

      <div className="App">
 
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
        </header>
      </div>
    </>
  );
}

export default App;
