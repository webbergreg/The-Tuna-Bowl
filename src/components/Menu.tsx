
import { useState } from 'react';
import '../css/Menu.css';
import burger from '../img/burger.gif';
import close from '../img/close.gif';
import home from '../img/home.gif';
import sleep from '../img/sleep.gif';
import { HEADER_2021 } from './2021/Season2021';
import divider from '../img/divider2.gif';

export const Menu = ()=>{

    const [show, setShow] = useState(false);
    const showClass = (show) ? 'show' : '';
    const iconSrc = (show) ? close : burger;

    const toggleMenu = ()=>{
        setShow(!show);
    }

    return <>
        <nav className={`App-menu ${showClass}`}>

            <div className = 'App-menu-links'>
                <h1>Links:</h1>
                <a href = '/'>
                    <img src = {home} alt = 'Home'/>
                </a>
                <a href = '/2021'>
                    {HEADER_2021}
                </a>
                <a href = 'https://sleeper.app/leagues/718535437227999232' target = '_blank'>
                    <img src = {sleep} alt = 'Sleeper'/>
                </a>
            </div>
            <img className = 'divider' src = {divider} alt = 'Divider'/>
            <div className = 'counter' id="sfc7krrufy3x6l16dx26wuenjd1pbsl5xew"></div>
        </nav>
        <div className = 'btn-show-menu' onClick = {toggleMenu}>
            <img src = {iconSrc} alt = 'Menu'/>
        </div>
    </>
}