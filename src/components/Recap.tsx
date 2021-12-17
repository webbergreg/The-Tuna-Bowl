import '../css/Recap.css';
import {useContext} from 'react';
import { SeasonContext } from './App';
import previous from '../img/previous.gif';
import back from '../img/back.gif';
import divider2 from '../img/divider2.gif';
import next from '../img/next.gif';

interface IRecapProps{
  children:any;
  title:any;
  weekInt?:number;
}
export const Recap = ({title, children, weekInt} :IRecapProps) => {

  const {seasonKey} = useContext(SeasonContext);

  const btnPrev = (weekInt > 0) ? <a href = {`/${seasonKey}/week-${weekInt-1}`} className = 'btn-recap-nav'>
    <img src = {previous} alt = 'Previous Page'/>
  </a> : null;

  const btnNext = (weekInt <= 16) ? <a href = {`/${seasonKey}/week-${weekInt+1}`} className = 'btn-recap-nav'>
    <img src = {next} alt = 'Previous Page'/>
  </a> : null;

  const btnBack = <a href = {`/${seasonKey}`} className = 'btn-recap-back'>
    <img src = {back} alt = 'Back'/>
  </a>
  
  return (
    <section id = {`recap-${weekInt}`} className={`Recap recap-style-${weekInt}`}>
      <h2>{title}</h2>
      {btnBack}
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