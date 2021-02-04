import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import Dummy from './components/dummy'
import User from './components/user'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Switch>
            <Route path="/todd">
              <User name="Todd" age="45" isLoggedIn={true} />
            </Route>
            <Route path="/becca">
              <User name="becca" age="28" isLoggedIn={true} />
            </Route>
            <Route path="/">
              <Dummy />
            </Route>
          </Switch>
        </Router>

        
      </header>
    </div>
  );
}

export default App;
