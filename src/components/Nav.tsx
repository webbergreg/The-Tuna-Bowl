import '../css/Nav.css';
import { WEEK_MARKERS } from '../icons';
import {useContext} from 'react';
import { SeasonContext } from './App';

export const Nav = ()=>{

    const {seasonKey} = useContext(SeasonContext);

    return <nav className="App-nav">
        <a href = {`/${seasonKey}/draft`}>{WEEK_MARKERS.WEEK0}</a>
        <a href = {`/${seasonKey}/week-1`}>{WEEK_MARKERS.WEEK1}</a>
        <a href = {`/${seasonKey}/week-2`}>{WEEK_MARKERS.WEEK2}</a>
        <a href = {`/${seasonKey}/week-3`}>{WEEK_MARKERS.WEEK3}</a>
        <a href = {`/${seasonKey}/week-4`}>{WEEK_MARKERS.WEEK4}</a>
        <a href = {`/${seasonKey}/week-5`}>{WEEK_MARKERS.WEEK5}</a>
        <a href = {`/${seasonKey}/week-6`}>{WEEK_MARKERS.WEEK6}</a>
        <a href = {`/${seasonKey}/week-7`}>{WEEK_MARKERS.WEEK7}</a>
        <a href = {`/${seasonKey}/week-8`}>{WEEK_MARKERS.WEEK8}</a>
        <a href = {`/${seasonKey}/week-9`}>{WEEK_MARKERS.WEEK9}</a>
        <a href = {`/${seasonKey}/week-10`}>{WEEK_MARKERS.WEEK10}</a>
        <a href = {`/${seasonKey}/week-11`}>{WEEK_MARKERS.WEEK11}</a>
        <a href = {`/${seasonKey}/week-12`}>{WEEK_MARKERS.WEEK12}</a>
        <a href = {`/${seasonKey}/week-13`}>{WEEK_MARKERS.WEEK13}</a>
        <a href = {`/${seasonKey}/week-14`}>{WEEK_MARKERS.WEEK14}</a>
    </nav>
}