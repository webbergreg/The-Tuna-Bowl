import LazyImg from '../LazyImg';
import { Recap } from '../Recap';
import timNotes from '../../img/timNotes.gif';
import danceGrave2 from '../../img/danceGrave2.gif';
import hayyy from '../../img/hayyy.gif';
import hole from '../../img/hole.gif';
import imBack from '../../img/imBack.gif';
import steam2 from '../../img/steam2.gif';
import ten from '../../img/numbers/10.gif';

export const Week10 = ()=>{
    const title = <>Week <img alt = '10' src = {ten}/></>
    return <Recap styleInt = {10} title = {title}>
        <h3>Injury Report:</h3>
        <p>Position: Tuna Bowl Recap writer
            <br/>Injury: Wrist/Hand Carpal Tunnel, Neck
            <br/>Status: Limited, Non full participation in recap
            <br/>Outlook: Game day decision, snap count likely
        </p>
        <p>Well I'm not going to sugarcoat it. That was just an ugly week of football. We had 10 blowouts this week folks and some of them were pretty surprising. The Dolphins ripped the Ravens, The Football Team battered Brady's Bucs, the Panthers crucified the Cards and Monday night finished with the 49ers ravaging the Rams. Other than that, I probably couldn't tell you much about any of the other 4 games other than Rondinko's Steelers losing in a tie to the 0-8 Lions. Because let's be honest, there's no winner in a tie. What else, what else... Oh yeah. How bout them Patriots!! 45-7 over a solid Browns team! What a dominant win. Mac N Cheese is looking confident, the Boogeymen are back and don't even get me started on that run game! That's 4 straight wins for the Pats as they climb that playoff ladder. FiveThirtyEight now has them at 74% chance to make the playoffs. Are the Pats back!??</p>
        <LazyImg alt = {`I'm back`} src = {imBack}/>
        <p>LOOK AT HIS PACE CURTIS!! LOOK AT IT!!</p>
        <p>Alright then, let's get down to business. Now that the dust has settled from week 10, we can see a lot has shifted in the power rankings so let's sift through the wreckage with a few of the highlights and lowlights of the week.</p>
        <ol>
            <li>
                <p>First and foremost. That's the NPC we have all come to fear and admire. With his 6th Highest scorer award and 3rd biggest blowout award on the season, he wasn't having any of the Rippers smack talk leading up to this game. Just a total annihilation. NPC steam rolled the Rippers 172-74.</p>
                <LazyImg alt = 'Steam 2' src = {steam2}/>
                <p>Yep, you read that right. 172-74. Difference of 98 points. That's more points than 8 teams scored this week alone! Impressive. Scary. A tough loss for the Rippers too since he just traded his 2022 first rounder for some reinforcements for that playoff push. Now, he's likely to put his team up for sale for the 3rd time this season. Just tough all around. Hay Rippers, next time just stay out of NPC's way.</p>
                <LazyImg alt = 'Hayyyy' src = {hayyy}/>
                <p>Baled it!</p>
            </li>
            <li>
                <p>our tightest matchup of the week came down to the final two carries of the Monday night game. Going into Monday night, AndyCantBreathe had roughly a 26 point lead while The Mutts had 3 players to play in Kittle, Mitchell and Gay. Seemed like an easy win for the Mutts, but the fantasy gods certainly made him work for it. In the final minutes, down 0.5 points and the 49ers trying to run out the clock, they handed it off 4 consecutive times to Mitchell. 1st down no gain. 2nd down -4 yards! 3rd down 8 yards! 4th down 5 yards! And the Mutts take it by 0.6 points! Congratulations Nox, you deserved that win even if Whitey feels slighted since Gay got the ol Pity Field Goal for absolutely no reason with 3 minutes left in the game down by a million which set up the entire Mitchell breakdown. Gotta love it. Unless you're whitey. Then you're completely miserable. (I'd normally insert a gif here but out of respect for the deceased, I'll just leave it as is. R.I.P AndyCantBreathe)</p>
            </li>
            <li>
                <p>Let's check in on Mr. Insufferable.. King Henry went down week 8... annnnnd checks notes..</p>
                <LazyImg alt = {`Timmay's notes`} src = {timNotes}/>
                <p>RuCunt is 0-4 since then. Delightful. Well done Replacements! Webber with a makeshift team after selling what appeared to be his entire roster for all of Morans and Ryans picks he still beat RuCunt! Splendid! First place 3 weeks ago and now in second place with the Bimbbly and Andy Cant Breathing down his neck. Should be an exciting finish. Either way.. The King is Dead!</p>
                <LazyImg alt = 'Dance grave 2' src = {danceGrave2}/> 
            </li>
            <li>
                <p>Louie redeemed himself this week when Kyler Murray was deemed a late gameday scratch. Not again said Louie and grabbed Matty Ice off the bench. Unfortunately, Matty Ice did what Matty Ice does... and that's shit the bed for 0.68 points. Yikes. Louie can't catch a break and the undefeated streak continues now sitting at 0-20. (Eyeballs emoji)</p>
                <LazyImg alt = 'Hole' src = {hole}/>
                <p>At this point, 5th and 6th place seem to be totally up for grabs with teams varying from 11 to 9 wins on the season. Every 2-0 week is huge at this point in the season.</p>
            </li>
        </ol>
        <p>Week 11 should be a doozy!</p>   
    </Recap>
}