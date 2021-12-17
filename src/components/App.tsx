import '../css/App.css';

import { Season2021 } from './2021/Season2021';
import { Header } from './Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export const App = () =>{
  return (
    <div className="App">

      <Header/>

      <Router>
        <Routes>
          <Route path = '/2021/*' element = {<Season2021/>}/>
        </Routes>
      </Router>

    </div>
  );
}