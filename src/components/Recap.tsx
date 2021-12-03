import * as React from 'react';
import '../css/Recap.css';

interface IRecapProps{
  children:any;
  title:any;
  styleInt?:number;
}
export const Recap = ({title, children, styleInt} :IRecapProps) => {
  return (
    <section id = {`recap-${styleInt}`} className={`Recap recap-style-${styleInt}`}>
      <h2>{title}</h2>
      <div className = 'recap-wrapper'>
        {children}
      </div>
    </section>
  );
}