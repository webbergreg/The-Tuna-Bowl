import LazyImg from '../LazyImg';
import cliffRupe from '../../img/cliffRupe.png';
import hands from '../../img/hands.gif';
import quidditch from '../../img/quidditch.jpg';
import moranVsMedian from '../../img/moranVsMedian.gif';
import { Recap } from '../Recap';
import { WEEK_MARKERS } from '../../icons';

export const Week4 = ()=>{
    const title = <>Week {WEEK_MARKERS.WEEK4}</>
    return <Recap weekInt = {4} title = {title}>
        <p>What an emotional week that was. To say that doink off the upright Sunday night hurt would be an understatement. To give you an inkling, I’m not used to losing games like this. I don’t like it. I'm lost. I’m not sure what to do with my hands... </p>
        <LazyImg alt = 'Hands' src = {hands}/>
        <p>At least we’ll never have to see Bill play Brady again, unless both of them are still in the league in 4 years… Or we get a Super Bowl matchup!?? Go Pats!</p>
        <p>Alright into the thick of it. What did we learn from another eventful week in the Tuna Bowl and who’s on my radar. Lots to unpack so let's dive in.</p>
        <h3>The Unexpected</h3>
        <ol>
            <li>
                <p>Rupes in first place after Week 4 and I think I’m going to be sick. He’s on top of the world and likely doesn’t even have a clue. We should all be nervous about this. Nothing’s scarier than a Taco running away with things without a care in the world.</p>
                <LazyImg alt = 'Rupe on a cliff' src = {cliffRupe}/>
            </li>
            <li>
                <p>No Playoffs Club collapses under the pressure of a perfect season. An embarrassing 0-2 on the week is tough to swallow. Best to get it out of the way now so he can focus on getting back to basics. If you could ask Tom Brady if he’d rather have the perfect season in 07 or the Superbowl at the end, I think we all know the answer. The top scorer in the league is looking at a rebound week 5 vs Nox The Mutt.</p>
            </li>
            <li>
                <p>Speaking of NPC’s collapse, after 3 weeks of mediocre 95-100 points, Gillies rose from the ashes and played the game of his life and dropped a 150 burger on NPC’s face. And that’s your biggest blowout of the week, 150 – 96. Inkredible.</p>
            </li>
            <li>
                <p>Tim lays a goose egg on Monday Night Primetime in a nail biter vs the Rippers. Tough look for a SEASONED vet of Tim’s caliber. Going into Monday night needing 3.38 points with Drake and Williams to play it all but looked like a guaranteed victory over Ryan and possibly the Median. Sleeper had Timmay as 100% favourites with a big stinking 0% for Ryan. Well not so fast Kevin!! Unfortunately for Tim, Drake and Williams combined for 1.80 points and left Tim with an agonizing 86.14 – 87.72 loss to Ryan the Ripper. This was straight up assault. Ryan should probably check his underwear for squid marks.</p>
            </li>
            <li>
                <p>Best underdog story of the year. LouCrew is on a mission. There probably wasn’t a chance he beats Rupe H2H but that Median was close! He misses the Dub by 5 points and continues his historic race to become possibly the first person ever to get to that perfect season. He sits at 0-8 through 1/3 of the season. Louie, maybe you’d be better off taking up Squidditch with Harry Potter and the boys down at the Legion bud. Keep up the good work.</p>
                <LazyImg alt = 'quidditch' src = {quidditch}/>
            </li>
        </ol>
        <h3>The Expected</h3>
        <ol>
            <li>
                <p>Moran was MURDERED by the MEDIAN again. Well that was quick. After a huge win last week Moran’s back to reality. Every protagonist has an antagonist. Sadly for Moran, the antagonist in this story is the Median and it’s time to collect.</p>
                <LazyImg alt = 'Moran vs. the Median' src = {moranVsMedian}/>
            </li>
            <li>
                <p>While Ryan’s victory may have been unexpected, him immediately thinking his team is above a .500 squad was definitely expected. Ryan The Ripper gets his first H2H victory of the season and now he’s all in. Last week it was Yard Sale Sunday, this week it’s Tuna Bowl Tuesday and I love the energy. Keep an eye out, he’s on the hunt and firing off trades. I’m sure all he needs is one trade that will take his team from second to last place and second to lowest Points For… to the next level.</p>
            </li>
            <li>
                <p>SQUID GAME!!!!!</p>
            </li>
        </ol>
        <p>Week 5 kicks off Thursday night. Set those lineups and get at it!</p>   
    </Recap>
}