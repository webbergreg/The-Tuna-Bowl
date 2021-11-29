import * as React from 'react';
import './css/Recap.css';

interface IRecapProps{
  children:any;
  title:string;
}
export const Recap = ({title, children} :IRecapProps) => {
  return (
    <section className="Recap">
      <h2>{title}</h2>
      {children}
    </section>
  );
}