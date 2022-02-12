import { WEEK_MARKERS } from '../../icons';
import { Recap } from '../Recap';
import jCage from '../../img/jCage.gif';
import cliff from '../../img/cliff.gif';
import LazyImg from '../LazyImg';

export const Week16 = ()=>{
    const title = <>{WEEK_MARKERS.WEEK16} Round 2 {WEEK_MARKERS.WEEK16}</>
    return <Recap title = {title} weekInt = {16} exclude = {[2,3,4,5]} lol = {[7]}>
        <h3>Dated January 7th, 2022</h3>
        <p>Well ho ho ho ya degenerates. Apologies for the week late recap here but I'm just going to level it to yas. I spent Christmas week black out drunk behind the local Wendy's down the road and then spent the following 10 days in lockdown on my deathbed with Covid. And frankly, writing these recaps was damn near the last thing on my bucket list. But with the power of modern medicine and a whole lot of edibles, I've managed to stave off death just long enough to go back in time and recap what was, a pretty exciting Round 2 of the Tuna Bowl playoffs.</p>
        <p>I'll keep this short and sweet because who knows how long these drugs will last, so let's get into all you need to know about Round 2. We had NPC vs the Rondingo Babys in Matchup 1 and Moran vs. his mortal enemy The RuCunt in Matchup number 2.</p>
        <p>NPC vs Rondinko was a close one with NPC coming out on top 106-99. A tight match by all accounts, but the real highlight from this was NPC's sixth sense about his kicker, Matt Prater going into the Thursday night match. With only minutes to spare, NPC cut Prater, the highest projected kicker available and substituted in a nobody off the wire. Well what do ya know, Matt Prater proceeded to blow his brains out on Primetime National television. One missed kick after another and finished the night with 1 stinking point! NPC's substitute?? 12 points.. Mix in Rondinko's QB Matty Staff turning the ball over 4 times and that's your ball game folks. Just an all round dick punch for the Rondinko. He's a goner.</p>
        <LazyImg className = 'inline' src = {jCage} alt ='Dick Punch'/> 
        <p>Our 2nd mathcup of the week was full of revenge and murder. A playoff rematch from 2018 when the slimy RuCunt stole the championship away from Moran. But this time around Moran was ready for the RuCunt. Just a straight up murder by Moran as the entire league closed their eyes, smiled and breathed a deep sigh of relief. 140-65 in one of the most embarrassing playoff losses in Tuna Bowl history. Moran literally wheeled an overmatched and rufied drunk RuCunt straight off a cliff to his death. The king is dead. Cold Blooded!</p>
        <LazyImg className = 'inline' src = {cliff} alt ='Off the cliff'/> 
        <p>Normally in this section, I'd write about the delicious matchup for next week between NPC and The Moranimals in The Tuna Bowl Championship and all these other exciting matchup scenarios, but since this post is already a week late and the Finals are already over I'd say you guys are probably fine to just skip next weeks recap and simply join us in August as we kick off the 2022 Season! See you there!
        <br/>
        <br/>
        Cheers,
        <br/>
        The Capman</p>
    </Recap>
}