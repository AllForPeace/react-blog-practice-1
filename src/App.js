import './App.css';
import Navbar from './navbar'
import Home from './home'

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />

        <p> { 10 } </p>
        <p> {'hello ninjas'} </p>
        <p> {[1, 2, 3, 4, 5]} </p>
        <p> {Math.random() * 10} </p>


        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
