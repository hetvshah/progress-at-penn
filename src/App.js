import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Info from './components/Info';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/info" render={(props) => <Info {...props} />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
