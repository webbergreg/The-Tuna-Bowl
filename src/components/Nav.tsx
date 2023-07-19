import '../css/Nav.css';
import { WEEK_MARKERS } from '../icons';
import {useContext} from 'react';
import { SeasonContext } from './App';

export const Nav = ()=>{

    const {seasonKey, weeks} = useContext(SeasonContext);

    const weekLinks = [];
    for(let i = 0; i==weeks; i++){
        weekLinks.push( <a href = {`/${seasonKey}/week-${i}`}>{WEEK_MARKERS[`WEEK${i}`]}</a>)
    }

    return <nav className="App-nav">
        {weekLinks}
    </nav>
}