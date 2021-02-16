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
      </div>
    </div>
  );
}

export default App;
