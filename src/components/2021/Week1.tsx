import * as React from 'react';
import { Recap } from '../Recap';
import sermon from '../../img/sermon.jpg';
import img1 from '../../img/numbers/1.1.gif';

export const Week1 = ()=>{

    const title = <>Week <img alt = '1' src = {img1}/></>
    return <Recap styleInt = {1} title = {title}>
        <p>And away we go!</p>
        <p>Week 1’s in the bag and boys O boys it’s good to have football back. Here’s a quick rundown of some of the highs and lows for all of you barely following along. Unbiased of course.</p>
        <h3>Highlights</h3>
        <ul>
            <li><p>No Playoffs Club’s 3 keepers combined for 77 points and locked in the high score of the week with 139 points. He could be tough to beat going forward.</p></li>
            <li><p>Surprise of the week might be Ron putting up second most points total even after 2 of his keepers were non existent. Jones and Mouseturd combined for 5 points. Mouseturd to injury and Jones fell victim to Rodgers tapping out in the 1st minute of the game.</p></li>
            <li><p>Frank’s 3 keepers combined for 72 points. Not bad for a retired Tight End, a backup Running Back, and soon to be convict. Also won biggest blowout award (see below).</p></li>
        </ul>
        <h3>Lowlights</h3>
        <ul>
            <li><p>Two players on Whitey’s bench outscored 7 of his starters 38 points to 35. Woof, you hate to see it! He’s your low scorer of the week with 70 points. Also earns biggest blowout, losing to Frank by 55 points.</p></li>
            <li><p>*Rupe’s off to a great start. Set it and forget it apparently. Trey Sermon with a big bold OUT in front of his name apparently wasn’t enough of a hint to Rupe he would NOT be playing. Shame Rupe. Shame on you.</p></li>
            <li><p>With a solid set of 3 keepers and high draft picks, one has to shake their head and wonder what happened to Moran this week. 86 points might beat Whitey every week, but it’s never going to beat the Median bud.</p></li>
            <li><p>Anyone with a Green Pay Packers player on their squad.</p></li>
        </ul>
        <p>That about sums up Week 1. Can’t wait to see what this week has in store.</p>
        <p>*I decided to bring back the penalty for starting players that are OUT/BYE/INACTIVE before the season started. Glad I did. Rupe, for your new team name we’re going to the Mount of Beatitudes where some believe none other than Jesus himself delivered the Sermon on the Mount! Just a coupla phonies spewing nonsense to whoever will listen! Seemed fitting. Your new team name is Sermon on the Mount and here is your new team logo. Be better, Rupe. It’s really not that hard.</p>
        <img alt = 'Sermon on the Mount' src = {sermon}/>
    </Recap>
}