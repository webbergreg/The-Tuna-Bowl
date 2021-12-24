import LazyImg from '../LazyImg';
import { Recap } from '../Recap';
import byeWeek from '../../img/byeWeek.gif';
import royalRumble from '../../img/royalRumble.gif';
import timPuke from '../../img/timPuke.gif';
import rocky from '../../img/wanna-ring-the-bell-rocky.gif';
import finishHim from '../../img/finishHim.gif';
import davidVgoliath from '../../img/davidVgoliath.gif';
import thisFine from '../../img/thisFine.gif';
import { WEEK_MARKERS } from '../../icons';

export const Week15 = ()=>{
    const title = <>{WEEK_MARKERS.WEEK15}Round 1 Covidcap{WEEK_MARKERS.WEEK15}</>
    return <Recap title = {title} weekInt = {15} exclude = {[3,4]}>
        <p>Well I was hesitant to title this week The Covidcap or next week The Covidcap because it doesn't look like it's getting better any time soon. We had 3 games flexed out of Sunday into Monday and Tuesday and that just amplified the stress level for everyone who rolled the dice on those games actually being played.</p>
        <p>Week 15 kicked off with a big AFC west showdown with the Chargers beating the Chargers in OT so the Chiefs could retake their crown atop the AFC. With a win over the Colts on Saturday, the Pats had a chance to jump back into first place in the AFC. Unfortunately, the Pats beat themselves with what seemed like 20 penalties called against them vs a good Colts team. Mix in a blocked punt for a TD and an INT to end the half and another to start the half and there's just no way you can win that game. I will say I was impressed with Mac's grit and determination to bring em back to within a field goal in the 4th quarter though. Sadly it all ended when Jonathan Taylor Thomas ran for a 200 yard TD and that pretty much sealed the Colts victory.</p>
        <p>Otherwise we had some pretty straight forward low scoring games with a few upsets sprinkled in. Lions embarrassing the Cards 30-12 for instance and the Saints once again beating the Bucs in a gross 9-0 victory. All in all this was a pretty terrible week of football especially for fantasy. I think I heard Joe Buck say something like this was the lowest TD count in a weekend of football in 50 years. Gross. And let me tell you, assuming that's true, Round 1 of the Tuna bowl playoffs certainly reflected that. For reference, allNumbInTheBum legit started his starters and narrowly squeaked out a 49-46 victory over LouCrew who benched half his team. I mean, this matchup didn't mean anything but still, NumbBum was 2 points away in Week 14 from playing in the playoffs this week. I'd like to think he's happy he lost that matchup.. 49 points.. Yuck.</p>
        <p>On to the good stuff. Let's get into Round 1 of the Tuna Bowl..</p>
        <p>While RuCunt and NPC enjoyed** their bye week the others battled it out in the ring.</p>
        <div className = 'inline-image-wrapper'>
            <LazyImg className = 'inline' src = {byeWeek} alt ='Bye Week'/> 
            <LazyImg className = 'inline' src = {royalRumble} alt ='Royal Rumble'/> 
        </div>
        <p>We had the Rongigolo's vs AllButtsAndGloryHoles in a 3rd vs 6th seed matchup for the ages! Just kidding. Both teams put up pedestrian numbers with half their squads out with injuries or Covid. Rondinko picks up the win 88-67.. Honestly the most exciting thing about this matchup  was the build up to Tuesday night wondering if the Rams game would get canceled and Timmay would get the win by default. Timmay's RB1, RB2, WR2, TE, FLEX and Kicker all had single digit outputs and combined for.. wait.. that can't be right..no.. no that's right, 26 points.. Gross.</p>
        <LazyImg className = 'inline' src = {timPuke} alt ='Tim Puke'/>
        <p>Rondinko wins his first matchup of the playoffs and looks ahead to Round 2 vs NPC who's eager for a rematch. On the season they're tied 1-1, so this one.. for a chance at the Tuna Bowl.. should be electric. Ding Ding.</p>
        <LazyImg className = 'inline' src = {rocky} alt ='Rocky'/>
        <p>Our second matchup was between two late season Juggernauts in Moranimal and The Mutts who scored 178 and 140 respectively in week 14. This had all the makings of a shootout but unfortunately for Nox, only the Moranimals showed up. Moran finishes the muttman Nox 121-102 and finally for NPC, justice is served!</p>
        <LazyImg className = 'inline' src = {finishHim} alt ='Finish Him!'/>
        <p>Moran moves on to Round 2 versus his mortal enemy the Rucunt and I for one can't wait for this matchup. Moran's team has cost him a fortune and it shows. They're prettay good. His team of titans will go Head 2 Head vs the Giant himself, Cooper Kupp. For Moran's sake, let's hope he gets his revenge.</p>
        <LazyImg className = 'inline' src = {davidVgoliath} alt ='Dave vs. Gloiath'/>
        <p>**NPC enjoying his bye week might be misleading. We saw him loose Hopkins and Uncle Lenny for the season, Evans to a hammy is questionable and KC is now in the middle of a covid outbreak with Kelce already Covid Positive. Mahomes and CEH might be next putting all three of them in Question for Round 2. After talking to NPC, he assured me, "Everything is fine."</p>
        <LazyImg className = 'inline' src = {thisFine} alt ='Dave vs. Gloiath'/>
        <p>As always, set those lineups.</p>
        <p>Cheers,<br/>The CapMan</p>
    </Recap>
}