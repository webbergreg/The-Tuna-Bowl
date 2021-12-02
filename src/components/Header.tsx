import * as React from 'react';
import fgif2 from '../img/fgif2.gif';
import nfl_helpet from '../img/nfl_helpet.gif';
import nfl from '../img/nfl.gif';
import trophy from '../img/trophy.gif';

export const Header = ()=>{

    return <header className="App-header">
        <div className = 'icon-set'>
        <img alt = 'football' src = {fgif2}/>  
        <img alt = 'NFL helmet' src = {nfl_helpet}/>  
        <img alt = 'NFL logo' src = {nfl}/>  
        <img alt = 'Trophy' src = {trophy}/>
        </div>
        <video width = {780} height = {120} loop autoPlay muted src = {'/vid/headerAnimated_compressed.mp4'}/>
    </header>
}