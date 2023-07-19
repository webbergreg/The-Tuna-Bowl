import { useState } from 'react';
import '../css/GolfCard.css';
export const GolfCard = ({playerKey, front, back, offX, offY, ro})=>{

    const [turned, setTurned] = useState(false);
    const rotate = ()=>{
        setTurned(!turned);
    }
    const turnedClass = (turned) ? 'turned' : '';
    const cardStyle = {
        transform:`translate(${offX}px, ${offY}px) rotate(${ro}deg)`
    }
    return <div className = 'card-wrapper' style = {cardStyle}><div className = {`golf-card ${turnedClass}`} onClick = {rotate}>
        <div className = 'card-face back'>
            <img src = {back} alt = 'card back'/>
        </div>
        <div className = 'card-face'>
            <img src = {front} alt = 'card front'/>
        </div>
    </div></div>
}