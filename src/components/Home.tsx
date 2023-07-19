import '../css/Home.css';
import ttb from '../img/ttb.jpg';
import fishwelcome from '../img/fishwelcome.gif';
import football from '../img/football_6.gif';
import clickhere1 from '../img/clickhere1.gif';
import clickhere2 from '../img/clickhere2.gif';
import { HEADER_2023 } from './2023/Season2023';

export const Home = ()=>{
    return <section className = 'Home'>
        <img className = 'welcome' src = {fishwelcome} alt = 'Welcome'/>
        <img src = {football} alt = 'Football'/>
        <div className = 'hero'>
            <img className = 'hero-image' src = {ttb} alt = 'The Tuna Bowl'/>
            <div className = 'hero-nav'>
                <h2>Current Season:</h2>
                <a href = '/2023'>
                    <img className = 'clickhere' src = {clickhere1} alt = 'Click Here'/>
                    {HEADER_2023}
                    <img className = 'clickhere' src = {clickhere2} alt = 'Click Here'/>
                </a>
            </div>
        </div>
    </section>
}