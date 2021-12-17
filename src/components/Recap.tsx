import '../css/Recap.css';

interface IRecapProps{
  children:any;
  title:any;
  weekInt?:number;
}
export const Recap = ({title, children, weekInt} :IRecapProps) => {
  return (
    <section id = {`recap-${weekInt}`} className={`Recap recap-style-${weekInt}`}>
      <h2>{title}</h2>
      <div className = 'recap-wrapper'>
        {children}
      </div>
    </section>
  );
}