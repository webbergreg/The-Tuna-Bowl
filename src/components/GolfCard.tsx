import { useState } from 'react';
import '../css/GolfCard.css';
import star from '../img/star3.gif';

export const GolfCard = ({playerKey, front, back, offX, offY, ro, captain, clickHere, cardClicked})=>{

    const [turned, setTurned] = useState(false);
    const rotate = ()=>{
        setTurned(!turned);
        cardClicked();
    }
    const turnedClass = (turned) ? 'turned' : '';
    const cardStyle = {
        transform:`translate(${offX}px, ${offY}px) rotate(${ro}deg)`
    }
    const starIcon = (captain) ? <img className = 'cap-star' src = {star} alt = 'team captain'/> : null;
    const clickImg = (clickHere) ? <img className = 'click-here' src = {clickHere} alt = 'click here'/> : null;

    return <div  className = 'card-wrapper' style = {cardStyle}><div className = {`golf-card ${turnedClass}`} onClick = {rotate}>
        <div className = 'card-face back'>
            <img src = {back} alt = 'card back'/>
        </div>
        <div className = 'card-face'>
            <img src = {front} alt = 'card front'/>
        </div>
        {starIcon}
        {clickImg}
    </div></div>
}