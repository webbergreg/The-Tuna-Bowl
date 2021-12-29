
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/WeeklyLeagueinfo.css';
import {useContext} from 'react';
import { SeasonContext } from './App';
import vs1 from '../img/vs1.gif';
import vs2 from '../img/vs2.gif';
import vs3 from '../img/vs3.gif';
import vs4 from '../img/vs4.gif';
import vs5 from '../img/vs5.gif';
import vs6 from '../img/vs6.gif';
import lolSrc from '../img/lol.gif';

interface IWeeklyLeageInfoPops{
    weekInt:number;
    show?:boolean;
    exclude?:number[];
    lol?:number[];
}

export const WeeklyLeagueInfo = (props : IWeeklyLeageInfoPops)=>{

    const {show, weekInt, exclude, lol} = props;
    const {seasonKey} = useContext(SeasonContext);
    const [matchups, setMatchups] = useState([]);
    const exArr = (exclude) ? exclude : [];
    const lolArr = (lol) ? lol : [];

    useEffect(()=>{
        axios.get(`${process.env.PUBLIC_URL}/data/${seasonKey}-${weekInt}-matchups.json`).then((res)=>{
            setMatchups(res.data);
        })
    }, [weekInt, seasonKey]);

    if(matchups.length === 0 || !show){
        return null;
    }

    const vsImgs = [
        <img src = {vs1} alt = 'vs.'/>,
        <img src = {vs3} alt = 'vs.'/>, 
        <img src = {vs4} alt = 'vs.'/>,
        <img src = {vs5} alt = 'vs.'/>,
        <img src = {vs2} alt = 'vs.'/>,
        <img src = {vs6} alt = 'vs.'/> 
    ];

    return <div className="WeeklyLeagueInfo">

        {matchups.map((matchup, i)=>{
            if(exArr.indexOf(i) !== -1){
                return null;
            }else{
                return <Matchup vs = {vsImgs[i]} key = {i} matchup= {matchup} lol = {lolArr}/>;
            }
        })}
        
    </div>
}

export const Matchup =({vs, matchup, lol}) =>{

    const p1 = matchup[0];
    const p2 = matchup[1];

    if(!p1 || !p2){
        return null;
    }

    return <div className = 'WeeklyLeagueInfo-Matchup'>
        <Team side = 'left' winner = {p1.points > p2.points} team = {p1} lol = {lol.indexOf(p1.roster_id) !== -1}/>
        <Team side = 'right' winner = {p2.points > p1.points} team = {p2} lol = {lol.indexOf(p2.roster_id) !== -1}/>
        <div className = 'vs'>{vs}</div>
    </div>
}

export const Team =({team, winner, side, lol}) =>{

    const winClass = (winner) ? 'winner' : 'loser';
    const avatar = team?.user?.avatar;

    const lolImg = (lol) ? <img className = 'lol' src = {lolSrc}/> : null;

    return <div className = {`WeeklyLeagueInfo-Team ${winClass} ${side}`}>
        <div className = 'team-info'>
            <div className = 'avatar'>
                <img src = {`${process.env.PUBLIC_URL}/avatars/${avatar}`} alt = 'Team Avatar'/> 
            </div>
            <div className = 'user'>{`@${team?.user?.display_name}`}</div>
            <div className = 'team'>{team?.user?.metadata?.team_name || `Team ${team?.user?.display_name}`}</div>
        </div>
        <div className = 'score'>{team?.points.toFixed(2)}</div>
        {lolImg}
    </div>
}