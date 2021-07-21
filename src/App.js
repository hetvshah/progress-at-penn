import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Info from './components/Info';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/info" render={(props) => <Info {...props} />} />
    </Switch>
  );
}

export default App;
