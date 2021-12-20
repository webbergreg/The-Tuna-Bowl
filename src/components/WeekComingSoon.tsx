import { Recap } from './Recap';
import undercon from '../img/undercon.gif';
import intowater from '../img/intowater.gif';

export const WeekComingSoon = ({weekInt})=>{
    const title = '';
    return <Recap hideInfo = {true} title = {title} weekInt = {weekInt}>
        <h2 className = 'coming-soon-header'>Coming Soon</h2>
        <div className = 'coming-soon'>
            <img src = {undercon} alt = 'Under Construction'/>
            <img src = {intowater} alt = 'Fishing'/>
            <img src = {undercon} alt = 'Under Construction'/>
        </div>
    </Recap>
}