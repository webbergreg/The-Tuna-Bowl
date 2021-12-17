import LazyImg from '../LazyImg';
import { Recap } from '../Recap';
import moran from '../../img/moran.png';
import { WEEK_MARKERS } from '../../icons';

export const Week2 = ()=>{
    const title = <>Week {WEEK_MARKERS.WEEK2}</>
    return <Recap weekInt = {2} title = {title}>
        <p>Week 2’s in the bag and I can’t be the only one a bit concerned with Rupes team. Wins the Worst Manager award after putting up 145 points of a possible 175? Doesn’t hurt when your 3 keepers put up 100 points. So good job Curtis, you picked 3 great keepers.</p>
        <h3>What are some highlights?</h3>
        <ol>
        <li><p>No Playoffs Club continues to put up big numbers. Back to back weeks as the highest scorer.</p></li>
        <li><p>Rupes team is way better than expected for someone who auto drafted blackout roofied drunk.</p></li>
        <li><p>Rondinko’s squad had another big week and sits at 4-0.</p></li>
        <li><p>No Playoffs Club had more points week 2 than Whiteys team has on the season. He continues the winless streak and goes into week 3 at 0-4.</p></li>
        <li><p>Speaking of winless, we’ve got 3 owners sitting at 0-4. Unfortunately for them, they’re all playing teams with a win on their record. So none of them are a lock for a W. I have a feeling someone’s going to be sitting at 0-6 after this weekend standing dangerously close to the edge.</p></li>
        </ol>
        <p>Which brings us to probably the best exchange I can remember in Tuna Bowl history. I feel the need to include it here for those who don’t follow along too closely in the chat. I’ll try to give a quick rundown here..</p>
        <p>Moran and Webber head to head going into the Monday nighter. Scores are close. Moran has Adams and Crosby vs Greg’s Swift. Moran is already 0-2 and collapsing on the season. Proceeds to lose 98.76 - 99.42 to Greg. Loses 98.76 – 104.67 to the Median. Yikes… Which sets up this exchange..</p>
        <LazyImg alt = 'Moran vs. the Median' src = {moran}/>
        <p>And Greg’s response..</p>
        <video src = {`${process.env.PUBLIC_URL}/vid/red.mp4`} loop controls width = {640} height = {360}/>
        <p>Well done Greg. Love it. Week 3’s kickin off and we’ve got some action! 4-0 NPC vs the 4-0 Rondinko’s is lookin’ like the Marquee Matchup of the week but I’m more excited about Murdered by the Median’s chances at a win. Projected to beat the lowly 1-3 Rippers 127 to 117 with the median projected at 121. No stress Moran, you got this!</p>
    </Recap>
}