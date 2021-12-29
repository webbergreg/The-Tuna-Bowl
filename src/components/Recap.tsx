import '../css/Recap.css';
import {useContext, useState} from 'react';
import { SeasonContext } from './App';
import previous from '../img/previous.gif';
import back from '../img/back.gif';
import divider2 from '../img/divider2.gif';
import next from '../img/next.gif';
import info from '../img/info.gif';
import xnews from '../img/xnews.gif';
import { WeeklyLeagueInfo } from './WeeklyLeagueInfo';

interface IRecapProps{
  children:any;
  title:any;
  weekInt?:number;
  hideInfo?:boolean;
  exclude?:number[];
  lol?:number[];
}
export const Recap = ({title, children, weekInt, hideInfo, exclude, lol} :IRecapProps) => {

  const {seasonKey} = useContext(SeasonContext);
  const [showInfo, setShowInfo] = useState(true);
  
  const btnPrev = (weekInt > 0) ? <a href = {`/${seasonKey}/week-${weekInt-1}`} className = 'btn-recap-nav'>
    <img src = {previous} alt = 'Previous Page'/>
  </a> : null;

  const btnNext = (weekInt <= 16) ? <a href = {`/${seasonKey}/week-${weekInt+1}`} className = 'btn-recap-nav'>
    <img src = {next} alt = 'Previous Page'/>
  </a> : null;

  const btnBack = <a href = {`/${seasonKey}`} className = 'btn-recap-back'>
    <img src = {back} alt = 'Back'/>
  </a>
  
  const toggleInfo = ()=>{
    setShowInfo(!showInfo);
  }

  const iconSrc =(showInfo) ? xnews : info;
  const btnShowInfo = <div className = 'btn-recap-info' onClick = {toggleInfo}>
    <img src = {iconSrc} alt = 'Show / Hide Info'/>
  </div>
  
  return (
    <section id = {`recap-${weekInt}`} className={`Recap recap-style-${weekInt}`}>
      <h2>{title}</h2>
      {!hideInfo && <WeeklyLeagueInfo exclude = {exclude} lol = {lol} show = {showInfo} weekInt = {weekInt}/>}
      {btnBack}
      {!hideInfo && btnShowInfo}
      <div className = 'recap-wrapper'>
        {children}
        <br/>
        <br/>
        <img className = 'rule' src = {divider2} alt = 'divider'/>
        <nav className = 'Recap-bottom-nav'>
          {btnPrev}
          {btnNext}
        </nav>
      </div>
    </section>
  );
}