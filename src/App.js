import Navbar from './navbar'
import Home from './home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/"> 
              <Home /> 
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
