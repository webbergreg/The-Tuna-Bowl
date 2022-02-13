import { WEEK_MARKERS } from '../../icons';
import { Recap } from '../Recap';
import antonioDave from '../../img/antonioDave.gif';
import chrisEverything from '../../img/chrisEverything.gif';
import chubb from '../../img/chubb.gif';
import daveKicked from '../../img/daveKicked.gif';
import daveTinfoil from '../../img/daveTinfoil.gif';
import poster from '../../img/poster.jpg';
import pennywise2 from '../../img/pennywise2.gif';
import LazyImg from '../LazyImg';

export const Week17 = ()=>{
    const title = <>{WEEK_MARKERS.WEEK17} Championship CuubbCap {WEEK_MARKERS.WEEK17}</>
    return <Recap title = {title} weekInt = {17} exclude = {[1,2,3,4,5]}>
        <p>Better late than never as the saying goes. Almost a month and half has gone by since the atrocity that occured on Monday Night Football between the Cleveland Browns and the Pittsburgh Steelers.. I mean, a month and a half since the Tuna Bowl Championship.. We'll get to the Monday Nighter in a bit.. For now lets just focus on the matchup of the century between NPC and Murdered by the Median..</p>
        <p>The preseason favourite NPC with a stacked team from the get go, dominating wins throughout the course of the season, vs the up and down Moranimals who literally sold his wife and kids just to get a shot at making the playoffs.. Two Juggernauts peaking at just the right time only to go head 2 head in the biggest showdown in the history of Fantasy Football... Jesus, sounds like a goddamn monster movie..</p>
        <LazyImg className = 'inline' src = {poster} alt ='Poster'/> 
        <p>Things were looking grim early for NPC when 4 of his studs produced single digit outputs on the day and Moran's Mutants were looking to run away with things. But NPC had a secret weapon he'd waited all playoffs to unleash. Rashad Pennywise comes through big time for NPC and drops a 30 burger on a scrambling Moran leaving him wondering if he'll ever see his family again.</p>
        <LazyImg className = 'inline' src = {pennywise2} alt ='Pennywise'/> 
        <p>Sunday's games wrapped up and left us longing for Monday Night's Matchup between the Cleveland Browns and the Pittsburgh Steelers. Heading into the game, Moran leads 112-103 with no players left while NPC had none other than Nick Big Dick Chubb. #2 rushing yard leader on the season, averaging 5.5 yards per carry facing off against the 2nd worst Run D in the league.</p>
        <LazyImg className = 'inline' src = {chubb} alt ='Daves Chubb'/> 
        <p>NPC is frothing at the mouth at this matchup. Especially when you realize the Browns lost their last game because they didn't feed Chubb the ball enough and not to mention Baker Mayfield has a torn shoulder. The one and only gameplan for Cleveland if they're trying to win is to run the ball 30 times on this terrible defense. This is the exact matchup up you pray for if you're a Full Chubb owner. It screams 30 points and anything less leaves you absolutely disgusted.</p>
        <p>Let's break it down. 1st quarter. Chubb carries it 3 times for 35 yards.. Hmm interesting.. Baker? 1 of 7 and a sack.. Ok, awful play calling but you gotta like Chubb averaging 12 yards a carry. 6 more points is a cakewalk for this beast. That's got to translate into at least 10 carries in the 2nd!</p>
        <p>2nd quarter.. Chubb carries it ONCE on the Browns opening drive and I guess that's it? Baker 3 of 5, INT and a sack, and notches what felt like his 20th batted ball of the evening. One carry in the entire 2nd quarter for Chubb.. uh oh..</p>
        <p>4 carries in 30 minutes of football for one of the best running backs in football. This is legitimately when NPC knew he lost. He took off his gear and called it a night.</p>
        <LazyImg className = 'inline' src = {antonioDave} alt ='Dave Brown'/> 
        <p>I know this because he texted me 37 times from the 2nd quarter to halftime, saying the game was rigged, the Browns are trying to lose, Roger Goodell hates him, you name it. I haven't seen NPC this deep into the rabbit hole since Deflategate! Me and NPC aren't on speaking terms so one of you Tunas should probably check on him. He's more confused than Nox trying to decide between the Men's washroom or the Women's washroom down at the local Denny's.</p>
        <LazyImg className = 'inline' src = {daveTinfoil} alt ='Tinfoil Hat'/> 
        <p>At half time, while being interviewed the Browns Head Coach insisted Chubb was healthy and would get a healthy dosage in the 2nd half. But at that point it was already over. Hard to establish the run in the 2nd half when you're losing and the entire team has already given up. Chubb mustered another 8 carries the entire 2nd half for a grand total of 12 carries for 60 yards and no TDs and no receptions on 0 targets.. Quite possibly the worst coaching performance these eyes have ever seen. Actually, the more I look back at how this game transpired, maybe NPC's conspiracies aren't so far fetched..**</p>
        <p>Actually, NEWSFLASH NPC! Nobody gives a shit and Moran just punted your hobbit ass outta the stadium! WOOOO!</p>
        <LazyImg className = 'inline' src = {daveKicked} alt ='Dave Punt'/> 
        <p>You think you can censor the CapMan! I'll see you in hell Daben!!</p>
        <p>So NPC and Chubb fall 3 points short and Moran finally gets redemption and wins the Tuna Bowl with a 112-109 victory. Congratulations Moran! You deserved it. From mid season laughing stock being murdered by the Median every week to building one of the most costly super teams I've ever witnessed. You finally brought home the Tuna. It only took your 2021 3rd rounder, and your 1st, 2nd, 3rd, 4th, and somehow three 5th round picks in 2022 to build that championship winning team. Incredible.</p>
        <LazyImg className = 'inline' src = {chrisEverything} alt ='The cost'/> 
        <p>And that wraps up your 2021 Tuna Bowl Season. Moran's the champ and Louie's the Minnow with the worst 1-27 record we've had in Tuna Bowl history. What a season fellas. It's been an honour to serve you and I look forward to recapping the 2022 season if NPC will have me back once I finish my sabbatical hiding from Cherry and MiniCap.</p>
        <p>Cheers,<br/>
        CapMan</p>
        <p>**The Cleveland Browns are being investigated for claims from Hue Jackson that Browns owner Jimmy Haslam  paid him to throw games during his coaching tenure in Cleveland...</p>
        <p>Interesting!!</p>
    </Recap>
}