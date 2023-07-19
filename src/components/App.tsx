import '../css/App.css';
import { createContext } from 'react';
import { Season2021 } from './2021/Season2021';
import { Season2023 } from './2023/Season2023';
import { Header } from './Header';
import { Menu } from './Menu';
import { Home } from './Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export const SeasonContext = createContext({seasonKey:'', weeks:0});

export const App = () =>{
  return (
    <div className="App">

      <Header/>
      <Menu/>

      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/2021/*' element = {<Season2021/>}/>
          <Route path = '/2023/*' element = {<Season2023/>}/>
        </Routes>
      </Router>

    </div>
  );
}