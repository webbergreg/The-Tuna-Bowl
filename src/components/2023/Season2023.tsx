import shadow0 from '../../img/0shadow.gif';
import shadow3 from '../../img/3shadow.gif';
import shadow2 from '../../img/2shadow.gif';
import divider1 from '../../img/divider1.gif';

import fgif2 from '../../img/fgif2.gif';

import '../../css/Season.css';

import {
    Routes,
    Route,
  } from "react-router-dom";
import { Nav } from '../Nav';
import { SeasonContext } from '../App';
import { Week0 } from './Week0';
import { WeekComingSoon } from '../WeekComingSoon';

export const HEADER_2023 = <h2 className = 'Season-title'>
    <img src = {fgif2} alt = 'football'/>
    <img src = {shadow2} alt = '2'/>
    <img src = {shadow0} alt = '0'/>
    <img src = {shadow2} alt = '2'/>
    <img src = {shadow3} alt = '3'/>
    <img src = {fgif2} alt = 'football'/>
</h2>;

export const Season2023 = ()=>{

    const SEASON_KEY = '2023';
    const WEEKS = 0;

    const season = <section id = {`season-${SEASON_KEY}`} className={`Season`}>
        {HEADER_2023}
        <Nav/>
        <img className = 'rule' src = {divider1} alt = 'divider'/>
    </section>

    return <SeasonContext.Provider value={{seasonKey:SEASON_KEY, weeks:WEEKS}}>
        <Routes>
            <Route path = '/' element = {season}></Route>
            <Route path = '/week-0' element = {<Week0/>}/>
            <Route path = '/week-1' element = {<WeekComingSoon weekInt = {1}/>}/>
            <Route path = '/week-2' element = {<WeekComingSoon weekInt = {2}/>}/>
            <Route path = '/week-3' element = {<WeekComingSoon weekInt = {3}/>}/>
            <Route path = '/week-4' element = {<WeekComingSoon weekInt = {4}/>}/>
            <Route path = '/week-5' element = {<WeekComingSoon weekInt = {5}/>}/>
            <Route path = '/week-6' element = {<WeekComingSoon weekInt = {6}/>}/>
            <Route path = '/week-7' element = {<WeekComingSoon weekInt = {7}/>}/>
            <Route path = '/week-8' element = {<WeekComingSoon weekInt = {8}/>}/>
            <Route path = '/week-9' element = {<WeekComingSoon weekInt = {9}/>}/>
            <Route path = '/week-10' element = {<WeekComingSoon weekInt = {10}/>}/>
            <Route path = '/week-11' element = {<WeekComingSoon weekInt = {11}/>}/>
            <Route path = '/week-12' element = {<WeekComingSoon weekInt = {12}/>}/>
            <Route path = '/week-13' element = {<WeekComingSoon weekInt = {13}/>}/>
            <Route path = '/week-14' element = {<WeekComingSoon weekInt = {14}/>}/>
            <Route path = '/week-15' element = {<WeekComingSoon weekInt = {15}/>}/>
            <Route path = '/week-16' element = {<WeekComingSoon weekInt = {16}/>}/>
            <Route path = '/week-17' element = {<WeekComingSoon weekInt = {17}/>}/>
        </Routes>
    </SeasonContext.Provider>
}