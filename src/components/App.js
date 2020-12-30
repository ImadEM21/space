import '../css/App.css';
import Header from './Header';
import Presentation from './Presentation';
import Formulaire from './Formulaire';
import Space from './Space';
import Stargate from './Stargate';
import Return from './Return';
import Earth from './Earth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div className="App container-fluid">
            <Header />
            <Presentation />
            <Formulaire />
            <Earth />
          </div>
        </Route>
        <Route path='/space'>
          <Space />
          <Return />
        </Route>
        <Route path='/stargate'>
          <Stargate />
          <Return />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
