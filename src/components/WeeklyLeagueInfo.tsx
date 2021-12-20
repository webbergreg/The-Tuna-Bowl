
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/WeeklyLeagueinfo.css';

export const WeeklyLeagueInfo = ({show, weekInt})=>{

    const [matchups, setMatchups] = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.PUBLIC_URL}/data/week-${weekInt}-matchups.json`).then((res)=>{
            setMatchups(res.data);
        })
    }, [weekInt]);

    if(matchups.length === 0 || !show){
        return null;
    }

    return <div className="WeeklyLeagueInfo">

        {matchups.map((matchup, i)=>{
            return <Matchup key = {i} matchup= {matchup}/>;
        })}
        
    </div>
}

export const Matchup =({matchup}) =>{

    const p1 = matchup[0];
    const p2 = matchup[1];

    return <div className = 'WeeklyLeagueInfo-Matchup'>
        <Team side = 'left' winner = {p1.points > p2.points} team = {p1}/>
        <Team side = 'right' winner = {p2.points > p1.points} team = {p2}/>
    </div>
}

export const Team =({team, winner, side}) =>{

    const winClass = (winner) ? 'winner' : 'loser';
    const avatarUrl = (team?.user?.metadata?.avatar) ? team.user.metadata.avatar : `${process.env.PUBLIC_URL}/avatars/${team?.user?.avatar}.png`;
    return <div className = {`WeeklyLeagueInfo-Team ${winClass} ${side}`}>
        <div className = 'team-info'>
            <div className = 'avatar'>
                <img src = {avatarUrl} alt = 'Team Avatar'/>
            </div>
            <div className = 'user'>{`@${team?.user?.display_name}`}</div>
            <div className = 'team'>{team?.user?.metadata?.team_name || `Team ${team?.user?.display_name}`}</div>
        </div>
        <div className = 'score'>{team?.points.toFixed(2)}</div>
    </div>
}