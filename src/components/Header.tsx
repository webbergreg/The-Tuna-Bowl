import fgif2 from '../img/fgif2.gif';
import nfl_helpet from '../img/nfl_helpet.gif';
import nfl from '../img/nfl.gif';
import trophy from '../img/trophy.gif';
import LazyImg from './LazyImg';

import '../css/Header.css';

export const Header = ()=>{

    return <header className="App-header">
        <div className = 'icon-set'>
            <LazyImg alt = 'football' src = {fgif2}/>  
            <LazyImg alt = 'NFL helmet' src = {nfl_helpet}/>  
            <LazyImg alt = 'NFL logo' src = {nfl}/>  
            <LazyImg alt = 'Trophy' src = {trophy}/>
        </div>
        <video width = {780} height = {120} loop autoPlay muted src = {`${process.env.PUBLIC_URL}/vid/headerAnimated_compressed.mp4`}/>
    </header>
}