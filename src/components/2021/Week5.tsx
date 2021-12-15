import LazyImg from '../LazyImg';
import { Recap } from '../Recap';
import louieVsLouCrew1 from '../../img/louieVsLouCrew1.jpg';
import louieVsLouCrew2 from '../../img/louieVsLouCrew2.jpg';
import moranVsMedian2 from '../../img/moranVsMedian2.gif';
import img5 from '../../img/numbers/5.1.gif';

export const Week5 = ()=>{
    const title = <>Week <img alt = '5' src = {img5}/></>
    return <Recap styleInt = {5} title = {title}>
        <p>Whitey can you still kick a football? I heard there's open tryouts across the league. Boy did we have some games this week. Missed kicks galore, everybody's injured, week 5 Sunday was the longest day of NFL football in the last 50 years, from London's morning stinker to the delayed Bills and Chiefs matchup Sunday night. What a day and what a week.</p>
        <p>On top of all that, fantasy did not disappoint. Tuna Bowl had 6! 6 teams go over 130 points this week. That's unheard of and with all that scoring let's dive into the high's and low's of week 5.</p>
        <ol>
            <li>
                <p>No Playoffs Club retakes top spot in the league tied at 8-2 with Mon Cunt with a whopping 650 Points For. This team is good, but the Manager might be even better? NPC with a big statement win over Nox The Dogpound Mutt after a dismal week 4. He put up 158 points this week and is once again the league's top scorer on the day. That's his 3rd Highest Scorer award of the year through 5 weeks. Impressive.</p>
            </li>
            <li>
                <p>What a match between Cunt Boy and Rondinko. Down to the wire. Classic Monday night nailbiter. Rondinko up by 3 points with no one left to play and 200 points sitting on his bench. Rupe takes a flyer on Latavius fucking Murray in his RB2 slot. How is Rupe 8-2 with Latavius Murray as his RB2? I won't lie, after 30 minutes of football and Murray only having 1 carry for no yards I thought Ron had a chance. But Murray pulled off an upset and added 4 points to Rupes total and that gave us our Tightest Matchup up the week 107.84-106.80. That's as tough as it gets. Pour one out for the Rondinko.</p>
            </li>
            <li>
                <p>Louie, Louie, Louie... What can we say about Team LouCrew. Don't be fooled, what he's doing is impressive. Through 5 weeks LouCrew is sitting at 0-10 with 391 Points For on the season. Going to be tough to beat the median or an opponent with an average point total of 78 a week. In a battle of the Jeff's this week, Gillies laid the hammer. Pummelling Lou 156-52!! Beat him by 104!! The difference he beat him by is double what Louie scored on the day!! hahaha Amazing. I couldn't help but laugh hearing Louie complaining about how bad his team is and it's like this never happened just two weeks ago..</p>
                <p>Week 3 Louie - Sells top 2 players</p>
                <LazyImg alt = 'Louie vs LouCrew 1' src = {louieVsLouCrew1}/>
                <p>Week 5 Louie - "How did this happen?"</p>
                <LazyImg alt = 'Louie vs LouCrew 2' src = {louieVsLouCrew2}/>
            </li>
            <li>
                <p>And Moran is back to Massacring that Median. What a rollercoaster. Going into Monday night I don't think anyone would have been surprised with another 0-2 from Moran. Unfortunately for Frank and the Median, Morans big swinging bag of Mark Andrews and his 36 points came to play. Moran goes 2-0 on the week and is slowly climbing those rankings!</p>
            </li>
            <li>
                <p>I should also mention with Moran putting up that point total Sunday night it only means one thing. Someone who thought they were a lock for that win against the median woke up Tuesday morning extremely disappointed. That person this week was none other than Nox the Dogpound Mutt!</p>
                <LazyImg alt = 'Moran vs the Median 2' src = {moranVsMedian2}/>
            </li>
        </ol>
        <p>We just had some big time trades today but we'll wait until Week 6 recap to cover that. Good luck Tunas and set those lineups!</p>
    </Recap>
}