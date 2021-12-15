import '../css/Nav.css';
import draft from '../img/draft.gif';
import trophy_2 from '../img/trophy_2.gif';
import img1 from '../img/numbers/1.1.gif';
import img2 from '../img/numbers/2.2.gif';
import img3 from '../img/numbers/3.1.gif';
import img4 from '../img/numbers/4.1.gif';
import img5 from '../img/numbers/5.1.gif';
import img6 from '../img/numbers/6.2.gif';
import img7 from '../img/numbers/7.1.gif';
import img8 from '../img/numbers/8.1.gif';

export const Nav = ()=>{

    return <nav className="App-nav">
        <img alt = 'Nav 1' src = {draft}/>
        <a href = '#recap-1'><img alt = 'Nav 1' src = {img1}/></a>
        <a href = '#recap-2'><img alt = 'Nav 2' src = {img2}/></a>
        <a href = '#recap-3'><img alt = 'Nav 3' src = {img3}/></a>
        <a href = '#recap-4'><img alt = 'Nav 4' src = {img4}/></a>
        <a href = '#recap-5'><img alt = 'Nav 5' src = {img5}/></a>
        <a href = '#recap-6'><img alt = 'Nav 6' src = {img6}/></a>
        <a href = '#recap-7'><img alt = 'Nav 7' src = {img7}/></a>
        <a href = '#recap-8'><img alt = 'Nav 8' src = {img8}/></a>
        <img alt = 'Nav 1' src = {trophy_2}/>
    </nav>
}