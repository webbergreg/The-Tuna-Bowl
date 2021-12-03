import * as React from 'react';
import '../css/Recap.css';

interface IRecapProps{
  children:any;
  title:any;
  style?:number;
}
export const Recap = ({title, children, style} :IRecapProps) => {
  return (
    <section className={`Recap recap-style-${style}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}