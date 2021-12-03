import * as React from 'react';

import '../css/App.css';

import { Season2021 } from './2021/Season2021';
import { Header } from './Header';
import { Nav } from './Nav';

export const App = () =>{
  return (
    <div className="App">
      
      <Header/>

      <Nav/>

      <Season2021/>

    </div>
  );
}