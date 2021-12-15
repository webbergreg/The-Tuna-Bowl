import '../css/App.css';

import { Season2021 } from './2021/Season2021';
import { Header } from './Header';

export const App = () =>{
  return (
    <div className="App">
      
      <Header/>

      <Season2021/>

    </div>
  );
}