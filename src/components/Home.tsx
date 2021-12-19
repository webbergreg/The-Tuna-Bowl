import '../css/Home.css';
import ttb from '../img/ttb.jpg';
import welcome from '../img/welcome.gif';
import { HEADER_2021 } from './2021/Season2021';

export const Home = ()=>{
    return <section className = 'Home'>
        <img className = 'welcome' src = {welcome} alt = 'Welcome'/>
        <div className = 'hero'>
            <img className = 'hero-image' src = {ttb} alt = 'The Tuna Bowl'/>
            <div className = 'hero-nav'>
                <h2>Seasons</h2>
                <a href = '/2021'>
                    {HEADER_2021}
                </a>
            </div>
        </div>
    </section>
}