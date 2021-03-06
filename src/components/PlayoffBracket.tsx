
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/PlayoffBracket.css';
import {useContext} from 'react';
import { SeasonContext } from './App';
import dead from '../img/dead.png';
import vs1 from '../img/vs1.gif';
import vs2 from '../img/vs2.gif';
import vs3 from '../img/vs3.gif';
import vs4 from '../img/vs4.gif';
import vs5 from '../img/vs5.gif';

export const PlayoffBracket = ()=>{

    const {seasonKey} = useContext(SeasonContext);
    const [bracket, setBracket] = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.PUBLIC_URL}/data/${seasonKey}-playoffs.json`).then((res)=>{
            setBracket(res.data);
        })
    }, [seasonKey]);

    if(bracket.length === 0){
        return null;
    }

    //get the championship game
    const champGame = bracket.find((matchup)=>{
        return matchup.p === 1;
    })
    //round 1 games
    const r1Left = bracket.find((matchup)=>{
        return matchup.m === 1;
    })
    const r1Right = bracket.find((matchup)=>{
        return matchup.m === 2;
    })
    //round 2 games
    const r2Left = bracket.find((matchup)=>{
        return matchup.m === 3;
    })

    const r2Right = bracket.find((matchup)=>{
        return matchup.m === 4;
    })

    return <div className="PlayoffBracket">
        <div className = 'round-divider r3'/>
        <div className = 'PlayoffBracket-Round round3'>
            <Matchup vs = {<img src = {vs1} alt = 'vs.'/>} matchup = {champGame}/>
        </div>
        <div className = 'round-divider r2'/>
        <div className = 'PlayoffBracket-Round round2'>
            <Matchup vs = {<img src = {vs2} alt = 'vs.'/>} matchup = {r2Left}/>
            <Matchup vs = {<img src = {vs3} alt = 'vs.'/>} matchup = {r2Right}/>
        </div>
        <div className = 'round-divider r1'/>
        <div className = 'PlayoffBracket-Round round1'>
            <Matchup vs = {<img src = {vs4} alt = 'vs.'/>} matchup = {r1Left}/>
            <Matchup vs = {<img src = {vs5} alt = 'vs.'/>} matchup = {r1Right}/>
        </div>
    </div>
}

export const Matchup =({matchup, vs}) =>{
    
    if(!matchup){
        return null;
    }

    return <div className = 'PlayoffBracket-Matchup'>
        <Team winner = {(matchup.w === matchup.t1) ? true : (!matchup.w) ? null : false} owner = {matchup.t1_owner}/>
        <Team winner = {matchup.w === matchup.t2 ? true : (!matchup.w) ? null : false} alt = {true} owner = {matchup.t2_owner}/>
        <div className = 'vs'>{vs}</div>
    </div>
}

export const Team =({owner, winner, alt = false}) =>{

    if(!owner){
        return <FPOTeam alt = {alt} />;
    }

    const winClass = (winner === null) ? '' : (winner) ? 'winner' : 'loser';
    const avatar = owner?.avatar;
    const x = (winner !== null && !winner) ? <img src = {dead} alt = 'You fucking suck'/> : null;
    
    return <div className = {`PlayoffBracket-Team ${winClass} ${alt ? 'alt' : ''}`}>
        <div className = 'team-info'>
            <div className = 'avatar'>
                <img src = {`${process.env.PUBLIC_URL}/avatars/${avatar}`} alt = 'Team Avatar'/> 
                {x}
            </div>
            <div className = 'owner-info'>
                <div className = 'user'>{`@${owner?.display_name}`}</div>
                <div className = 'team'>{owner?.metadata?.team_name || `Team ${owner?.display_name}`}</div>
            </div>
        </div>
    </div>
}

export const FPOTeam = ({alt = false})=>{
    return <div className = {`PlayoffBracket-Team fpo ${alt ? 'alt' : ''}`}>
        <div className = 'team-info'>
            <div className = 'avatar'>

            </div>
            <div className = 'owner-info'>
                <div className = 'team'>TBD</div>
            </div>
        </div>
    </div>
}