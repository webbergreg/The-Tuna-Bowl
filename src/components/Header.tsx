import fgif2 from '../img/fgif2.gif';
import nfl_helpet from '../img/nfl_helpet.gif';
import nfl from '../img/nfl.gif';
import trophy from '../img/trophy.gif';
import LazyImg from './LazyImg';

import '../css/Header.css';
import { CLOUDFRONT_DISTRO } from '../constants';

export const Header = ()=>{

    return <header className="App-header">
        <div className = 'icon-set'>
            <LazyImg alt = 'football' src = {fgif2}/>  
            <LazyImg alt = 'NFL helmet' src = {nfl_helpet}/>  
            <LazyImg alt = 'NFL logo' src = {nfl}/>  
            <LazyImg alt = 'Trophy' src = {trophy}/>
        </div>
        <a href = '/'><video width = {780} height = {120} loop autoPlay muted playsInline src = {`${CLOUDFRONT_DISTRO}/vid/headerAnimated_compressed.mp4`}/></a>
        <div className = 'icon-set-right'>
            <LazyImg alt = 'Trophy' src = {trophy}/>
            <LazyImg alt = 'NFL logo' src = {nfl}/>  
            <LazyImg alt = 'NFL helmet' src = {nfl_helpet}/>  
            <LazyImg alt = 'football' src = {fgif2}/>  
        </div>
    </header>
}