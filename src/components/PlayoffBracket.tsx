
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/WeeklyLeagueinfo.css';
import {useContext} from 'react';
import { SeasonContext } from './App';

export const PlayoffBracket = ({})=>{

    const {seasonKey} = useContext(SeasonContext);
    const [bracket, setBracket] = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.PUBLIC_URL}/data/${seasonKey}-playoffs.json`).then((res)=>{
            setBracket(res.data);
        })
    }, []);

    console.log(bracket);

    return <div className="PlayoffBracket">

    </div>
}

export const Matchup =({matchup}) =>{

    const p1 = matchup[0];
    const p2 = matchup[1];

    return <div className = 'PlayoffBracket-Matchup'>
        <Team side = 'left' winner = {p1.points > p2.points} team = {p1}/>
        <Team side = 'right' winner = {p2.points > p1.points} team = {p2}/>
    </div>
}

export const Team =({team, winner, side}) =>{

    const winClass = (winner) ? 'winner' : 'loser';
    const avatar = team?.user?.avatar;
    
    return <div className = {`PlayoffBracket-Team ${winClass} ${side}`}>
        <div className = 'team-info'>
            <div className = 'avatar'>
                <img src = {`${process.env.PUBLIC_URL}/avatars/${avatar}`} alt = 'Team Avatar'/> 
            </div>
            <div className = 'user'>{`@${team?.user?.display_name}`}</div>
            <div className = 'team'>{team?.user?.metadata?.team_name || `Team ${team?.user?.display_name}`}</div>
        </div>
        <div className = 'score'>{team?.points.toFixed(2)}</div>
    </div>
}