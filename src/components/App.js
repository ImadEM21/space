import '../css/App.css';
import Header from './Header';
import Presentation from './Presentation';
import Formulaire from './Formulaire';
import Space from './Space';
import Stargate from './Stargate';
import Return from './Return';
import Earth from './Earth';
import Mars from './Mars';
import NavBar from './NavBar';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div className="App">
            <NavBar />
            <Header />
            <Presentation />
            <Formulaire />
            <Earth />
            <Mars />
            <Footer />
          </div>
        </Route>
        <Route path='/space'>
          <NavBar />
          <Space />
          <Return />
        </Route>
        <Route path='/stargate'>
          <NavBar />
          <Stargate />
          <Return />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
