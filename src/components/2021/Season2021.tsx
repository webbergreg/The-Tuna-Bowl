import { Week1 } from './Week1';
import { Week2 } from './Week2';
import { Week3 } from './Week3';
import { Week4 } from './Week4';
import { Week5 } from './Week5';
import { Week6 } from './Week6';
import { Week7 } from './Week7';
import { Week8 } from './Week8';
import { Week9 } from './Week9';
import { Week10 } from './Week10';
import { Week11 } from './Week11';
import { Week12 } from './Week12';
import { Week13 } from './Week13';
import { Week14 } from './Week14';
import { Week15 } from './Week15';
import img2 from '../../img/2.gif';
import img1 from '../../img/1.gif';
import img0 from '../../img/0.gif';
import fgif2 from '../../img/fgif2.gif';
import football_4 from '../../img/football_4.gif';
import football_5 from '../../img/football_5.gif';
import divider1 from '../../img/divider1.gif';
import champ from '../../img/champ.gif';
import minnow from '../../img/minnow.gif';
import construction from '../../img/construction.gif';
import minnowLouie from '../../img/minnow-2021.jpg';

import '../../css/Season.css';

import {
    Routes,
    Route,
  } from "react-router-dom";
import { Nav } from '../Nav';
import { WeekComingSoon } from '../WeekComingSoon';
import { SeasonContext } from '../App';
import { Week0 } from './Week0';
import { PlayoffBracket } from '../PlayoffBracket';

export const HEADER_2021 = <h2 className = 'Season-title'>
    <img src = {fgif2} alt = 'football'/>
    <img src = {img2} alt = '2'/>
    <img src = {img0} alt = '0'/>
    <img src = {img2} alt = '2'/>
    <img src = {img1} alt = '1'/>
    <img src = {fgif2} alt = 'football'/>
</h2>;

export const Season2021 = ()=>{

    const SEASON_KEY = '2021';

    const placeholder = <div className = 'placeholder'>
        <img src = {construction} alt = 'Under Construction'/>
    </div>;

    const season = <section id = {`season-${SEASON_KEY}`} className={`Season`}>
        {HEADER_2021}
        <h3 className = 'Season-recap-title'>
            <img src = {football_4} alt = 'Turkey'/>
            <div>Recaps</div>
            <img src = {football_5} alt = 'Turkey'/>
        </h3>
        <img className = 'rule' src = {divider1} alt = 'divider'/>
        <Nav/>
        <img className = 'rule' src = {divider1} alt = 'divider'/>
        <div className = 'Season-results'>
            <div id = 'champ' className = 'Season-results-section'>
                <h4>
                    <img src = {champ} alt = 'Champion'/>
                </h4>
                {placeholder}
            </div>
            <PlayoffBracket/>
            <div id = 'minnow' className = 'Season-results-section'>
                <h4>
                    <img src = {minnow} alt = 'Minnow'/>
                </h4>
                <img className = 'user-image' src = {minnowLouie} alt = 'Louie'/>
            </div>
        </div>
    </section>

    return <SeasonContext.Provider value={{seasonKey:SEASON_KEY}}>
        <Routes>
            <Route path = '/' element = {season}></Route>
            <Route path = '/week-0' element = {<Week0/>}/>
            <Route path = '/week-1' element = {<Week1/>}/>
            <Route path = '/week-2' element = {<Week2/>}/>
            <Route path = '/week-3' element = {<Week3/>}/>
            <Route path = '/week-4' element = {<Week4/>}/>
            <Route path = '/week-5' element = {<Week5/>}/>
            <Route path = '/week-6' element = {<Week6/>}/>
            <Route path = '/week-7' element = {<Week7/>}/>
            <Route path = '/week-8' element = {<Week8/>}/>
            <Route path = '/week-9' element = {<Week9/>}/>
            <Route path = '/week-10' element = {<Week10/>}/>
            <Route path = '/week-11' element = {<Week11/>}/>
            <Route path = '/week-12' element = {<Week12/>}/>
            <Route path = '/week-13' element = {<Week13/>}/>
            <Route path = '/week-14' element = {<Week14/>}/>
            <Route path = '/week-15' element = {<Week15/>}/>
            <Route path = '/week-16' element = {<WeekComingSoon weekInt = {16}/>}/>
            <Route path = '/week-17' element = {<WeekComingSoon weekInt = {17}/>}/>
        </Routes>
    </SeasonContext.Provider>
}