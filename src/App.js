import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Info from './components/Info';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/info" render={(props) => <Info {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
