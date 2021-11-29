import * as React from 'react';
import './css/App.css';
import { Recap} from './Recap';
import sermon from './img/sermon.jpg';
import quidditch from './img/quidditch.jpg';
import louieVsLouCrew1 from './img/louieVsLouCrew1.jpg';
import louieVsLouCrew2 from './img/louieVsLouCrew2.jpg';
import cliffRupe from './img/cliffRupe.png';
import moran from './img/moran.png';
import mistake from './img/mistake.gif';
import moranVsMedian from './img/moranVsMedian.gif';
import moranVsMedian2 from './img/moranVsMedian2.gif';
import unnamed from './img/unnamed.gif';
import hulkNox from './img/hulkNox.gif';
import hulkRyan from './img/hulkRyan.gif';
import timNotes from './img/timNotes.gif';
import hands from './img/hands.gif';
import rupeLaughWaiver from './img/rupeLaughWaiver.gif';
import frankX from './img/frankX.gif';
import mistakeJeffFields from './img/mistakeJeffFields.gif';
import mrInsufferable from './img/mrInsufferable.jpg';
import upsetLouie from './img/upsetLouie.gif';
import ryanScared from './img/ryanScared.gif';
import homerDave from './img/homerDave.gif';
import daveRealityCheck from './img/daveRealityCheck.gif';
import danceGrave1 from './img/danceGrave1.gif';
import montysBack from './img/montysBack.gif';
import somethingMurray from './img/somethingMurray.jpg';
import danceGrave2 from './img/danceGrave2.gif';
import hayyy from './img/hayyy.gif';
import hole from './img/hole.gif';
import imBack from './img/imBack.gif';
import steam2 from './img/steam2.gif';
import boomRoast from './img/boomRoast.gif';
import rainSad2 from './img/rainSad2.gif';
import runOver from './img/runOver.gif';
import folkHero from './img/folkHero.jpg';

export const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Tuna Bowl, 2021</h1>  
      </header>

      <Recap title = 'Week 1 Recap'>
        <p>And away we go!</p>
        <p>Week 1’s in the bag and boys O boys it’s good to have football back. Here’s a quick rundown of some of the highs and lows for all of you barely following along. Unbiased of course.</p>
        <h3>Highlights</h3>
        <ul>
          <li>No Playoffs Club’s 3 keepers combined for 77 points and locked in the high score of the week with 139 points. He could be tough to beat going forward.</li>
          <li>Surprise of the week might be Ron putting up second most points total even after 2 of his keepers were non existent. Jones and Mouseturd combined for 5 points. Mouseturd to injury and Jones fell victim to Rodgers tapping out in the 1st minute of the game.</li>
          <li>Frank’s 3 keepers combined for 72 points. Not bad for a retired Tight End, a backup Running Back, and soon to be convict. Also won biggest blowout award (see below).</li>
        </ul>
        <h3>Lowlights</h3>
        <ul>
          <li>Two players on Whitey’s bench outscored 7 of his starters 38 points to 35. Woof, you hate to see it! He’s your low scorer of the week with 70 points. Also earns biggest blowout, losing to Frank by 55 points.</li>
          <li>*Rupe’s off to a great start. Set it and forget it apparently. Trey Sermon with a big bold OUT in front of his name apparently wasn’t enough of a hint to Rupe he would NOT be playing. Shame Rupe. Shame on you.</li>
          <li>With a solid set of 3 keepers and high draft picks, one has to shake their head and wonder what happened to Moran this week. 86 points might beat Whitey every week, but it’s never going to beat the Median bud.</li>
          <li>Anyone with a Green Pay Packers player on their squad.</li>
        </ul>
        <p>That about sums up Week 1. Can’t wait to see what this week has in store.</p>
        <p>*I decided to bring back the penalty for starting players that are OUT/BYE/INACTIVE before the season started. Glad I did. Rupe, for your new team name we’re going to the Mount of Beatitudes where some believe none other than Jesus himself delivered the Sermon on the Mount! Just a coupla phonies spewing nonsense to whoever will listen! Seemed fitting. Your new team name is Sermon on the Mount and here is your new team logo. Be better, Rupe. It’s really not that hard.</p>
        <img src = {sermon}/>
      </Recap>

      <Recap title = 'Week 2 Recap'>
        <p>Week 2’s in the bag and I can’t be the only one a bit concerned with Rupes team. Wins the Worst Manager award after putting up 145 points of a possible 175? Doesn’t hurt when your 3 keepers put up 100 points. So good job Curtis, you picked 3 great keepers.</p>
        <h3>What are some highlights?</h3>
        <ol>
          <li>No Playoffs Club continues to put up big numbers. Back to back weeks as the highest scorer.</li>
          <li>Rupes team is way better than expected for someone who auto drafted blackout roofied drunk.</li>
          <li>Rondinko’s squad had another big week and sits at 4-0.</li>
          <li>No Playoffs Club had more points week 2 than Whiteys team has on the season. He continues the winless streak and goes into week 3 at 0-4.</li>
          <li>Speaking of winless, we’ve got 3 owners sitting at 0-4. Unfortunately for them, they’re all playing teams with a win on their record. So none of them are a lock for a W. I have a feeling someone’s going to be sitting at 0-6 after this weekend standing dangerously close to the edge.</li>
        </ol>
        <p>Which brings us to probably the best exchange I can remember in Tuna Bowl history. I feel the need to include it here for those who don’t follow along too closely in the chat. I’ll try to give a quick rundown here..</p>
        <p>Moran and Webber head to head going into the Monday nighter. Scores are close. Moran has Adams and Crosby vs Greg’s Swift. Moran is already 0-2 and collapsing on the season. Proceeds to lose 98.76 - 99.42 to Greg. Loses 98.76 – 104.67 to the Median. Yikes… Which sets up this exchange..</p>
        <img src = {moran}/>
        <p>And Greg’s response..</p>
        <video src = {'./vid/red.mp4'} loop controls width = {640} height = {360}/>
        <p>Well done Greg. Love it. Week 3’s kickin off and we’ve got some action! 4-0 NPC vs the 4-0 Rondinko’s is lookin’ like the Marquee Matchup of the week but I’m more excited about Murdered by the Median’s chances at a win. Projected to beat the lowly 1-3 Rippers 127 to 117 with the median projected at 121. No stress Moran, you got this!</p>
      </Recap>

      <Recap title = 'Week 3 Recap'>
        <p>Sweet fancy moses, quite a week of Football.</p>
        <p>What did we learn? </p>
        <p>Always start your studs.</p>
        <img src = {mistake}/>
        <p>Jeff “DAAAA BEARS” Gillies just can’t help himself. Herbert in a KC shootout or Justin Fields first career start against a stout Cleveland D? Annnnd that’s the ball game folks. Fields mustered a shockingly bad 68 yards passing (2 more than Tuckers Game Winning FG for reference) for a grand total of 3.9 points vs Herbert’s 30 burger which would have given Jeff the W. Against Rupe’s team no less. A team we’d all be happy to see lose every single week. Yet here we are and Rupe sits in 2nd at 5-1 scratching at the top spot. How about this name for your team, Jeff? “This Justin…Fields Sucks!” (not bad)</p>
        <p>Moran’s team is better than his previous 0-4 record would have led us to believe. After an early trade for Edmunds and Andrews where we saw him mortgage his 2022 season, Moran just MURDERED the MEDIAN and not to mention leaving Martins bloody corpse on the side of the highway while he was at it. Moran over Martin 170 to 85 and that’s your biggest blowout of the week folks. This continues, Moran might have to change his name to “Saved by the Median???” (not great)</p>
        <p>Another big turnaround was AndyCantRied’s big win over Webber this weekend. Another 0-4 team showing some life with a big win against their opponent and the dreaded Median. Big shout out to Curt. First time breaking 100 points in his last 16 starts. Bound to happen at some point, just sad to see the streak end. Curt, did you hear Andy was rushed to the hospital in an ambulance after the game? Might want to think about changing your team name to “AndyCantBreathe” AMMMIIIRIGHT!!!? (poor taste)</p>
        <p>While we’re talking about winless teams lets focus in on Louie who went into the week against, Nox The Dogpound Mutt sitting at 0-4. There was hope he might scrape out a victory but then we saw something we don’t normally see this early in a football season. A pre-week 3 IDGAF yard sale. Ya hate to see it. Louie’s team just went from bad to worse and he’s now eyeing a perfect 0-26 season as well as the Minnow. Sad look for our defending Champ. Might want to consider a name change, LouCrew. How about “LouBlew….It”  (Just terrible)</p>
        <p>Speaking of perfect seasons… Our two 4-0 teams, NPC and The Rondinko Ate Yo Baby came crashing back to earth this week. Both teams put up some low numbers but it was NPC who comes out with the victory and narrowly edges out the Median 105.5 to 105.46. The winning streak continues as NPC sits at 6-0 and eyeing a juicy week 4 matchup vs “This Justin….I’m 30 Point Underdog Again.” LOVE IT!</p>
        <p>Storyline for next week has to be who breaks the quest for the Perfect Season. NPC or Lou’s Crew of Misfits. Bring on week 4!</p>
        <p>Warning… The Pats look terrible. Now we got Tommy and Gronky coming to town and I’m just not sure I can take it. If you don’t find a week 4 recap in your inbox by mid next week I’m likely dead. Good luck in week 4!</p>
      </Recap>

      <Recap title = 'Week 4 Recap'>
        <p>What an emotional week that was. To say that doink off the upright Sunday night hurt would be an understatement. To give you an inkling, I’m not used to losing games like this. I don’t like it. I'm lost. I’m not sure what to do with my hands... </p>
        <img src = {hands}/>
        <p>At least we’ll never have to see Bill play Brady again, unless both of them are still in the league in 4 years… Or we get a Super Bowl matchup!?? Go Pats!</p>
        <p>Alright into the thick of it. What did we learn from another eventful week in the Tuna Bowl and who’s on my radar. Lots to unpack so let's dive in.</p>
        <h3>The Unexpected</h3>
        <ol>
          <li>
            <p>Rupes in first place after Week 4 and I think I’m going to be sick. He’s on top of the world and likely doesn’t even have a clue. We should all be nervous about this. Nothing’s scarier than a Taco running away with things without a care in the world.</p>
            <img src = {cliffRupe}/>
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
            <img src = {quidditch}/>
          </li>
        </ol>
        <h3>The Expected</h3>
        <ol>
          <li>
            <p>Moran was MURDERED by the MEDIAN again. Well that was quick. After a huge win last week Moran’s back to reality. Every protagonist has an antagonist. Sadly for Moran, the antagonist in this story is the Median and it’s time to collect.</p>
            <img src = {moranVsMedian}/>
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

      <Recap title = 'Week 5 Recap'>
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
            <img src = {louieVsLouCrew1}/>
            <p>Week 5 Louie - "How did this happen?"</p>
            <img src = {louieVsLouCrew2}/>
          </li>
          <li>
            <p>And Moran is back to Massacring that Median. What a rollercoaster. Going into Monday night I don't think anyone would have been surprised with another 0-2 from Moran. Unfortunately for Frank and the Median, Morans big swinging bag of Mark Andrews and his 36 points came to play. Moran goes 2-0 on the week and is slowly climbing those rankings!</p>
          </li>
          <li>
            <p>I should also mention with Moran putting up that point total Sunday night it only means one thing. Someone who thought they were a lock for that win against the median woke up Tuesday morning extremely disappointed. That person this week was none other than Nox the Dogpound Mutt!</p>
            <img src = {moranVsMedian2}/>
          </li>
        </ol>
        <p>We just had some big time trades today but we'll wait until Week 6 recap to cover that. Good luck Tunas and set those lineups!</p>
      </Recap>

      <Recap title = 'Week 6 Recap'>
        <p>I won't say this was an easy week to recap. Watching 2 quarters of the Pats game, drunk in the passenger seat on DAZN eating up half my Data for the month is not how I like to spend my Football Sunday's. Especially when they lose in OT because Josh McD is a giant pussy and won't let MAC FUCKIN JONES SLING IT!! I mean come on Josh! Per PFF, Mac is currently ranked QB13 on the season and leading all rookies in his class and probably winning Rookie of the Year and we're seriously not going to go for it on 4th and 3 in OT when they haven't stopped Dak all F'in night!? Won't even bother mentioning the five other 4th and short punt aways we settled for. The only thing worse than being 2-4 is knowing they are EXTREMELY close to being 5-1. Sorry... I digress.. This is a Fantasy Recap not how good Mac Jones looks and how bright the future is for New England. Apologies, let's get back to fantasy.</p>
        <p>We actually got a decent game in London between two bad teams and saw the Jags come away with their first win of the season.. Speaking of first wins of the season, Team LouCrew still doesn't have one.</p>
        <p>Going into the Monday Nighter pretty much tied with Whitey 90-90, LouCrew just needed Devin SingleDigitary to outscore Stefon Diggin Louies Grave. And that's basically where you immediately lose hope if you're a spectator. Diggs outscored Singletary 20-7 and that's your ballgame. The streak continues as LouCrew now sits at 0-12 as we quickly approach the halfway mark of the season. Keep it up Louie! We're all pulling for you!</p>
        <p>NPC "Making History" update:<br/>I already had this big elaborate update written up on Monday for NPC's impressive, Biggest Blowout week 6 win over Timmay. How he's on pace for 1850 points on the season, which would be a Tuna Bowl record, how he's averaging a whopping 132 points a week, and how he's won 4 of 6 Highest Scorer Awards on the season but then MNF and Derrick Henry happened. Henry's 35 points carries RuCunt over Morans dead, lifeless body in a 145-116 thrashing. RuCunt goes 2-0 again on the week and earns his first Highest Scorer of the week award. NPC and Mon Cunt look to be the two top dogs running away with things as your solo 10-2 leaders.</p>
        <p>Other items worth observing..</p>
        <ol>
          <li>
            <p>Well, Moran's at it again. What a fucking rollercoaster. Since updating his team name after a grueling Week 2 loss to Webber, here is Moran's stat line.
            <br/>Week 2 - 0-2
            <br/>Week 3 - 2-0
            <br/>Week 4 - 0-2
            <br/>Week 5 - 2-0
            <br/>Week 6 - 1-1
            <br/>Week 7 - ???
            </p>
            <img src = {unnamed}/>
            <p>Jesus, I'm nauseous just reviewing this, I can't imagine how Moran's feeling. The Median is just toying with him at this point. Sitting at 5-7 after a rare win vs the Median and in 8th place, Moran is in desperate territory here for someone with so much draft capital and promise going into the season. Get ready, I suspect a few more trades made directly out of fear of missing the playoffs once again. After an ugly loss to his Fantasy mortal enemy RuCunt, Moran is looking at a nasty week 7 matchup vs NPC. This could get ugly.</p>
          </li>
          <li>
            <p>Week 6 kicked off with a bang. We had Jeff Gillies go all in on DAA BEARS. He can't help himself. First we had Nox trade him Bobby Trees and an injured David Montgomery(IR for 5 more weeks) for an equal receiver in Pittman and a purebred Stud, James Robinson... DAAAA BEARS!</p>
            <img src = {hulkNox}/>
            <p>But Jeff wasn't done there. Once he realized Monty was in fact on IR and couldn't use him until week 11, he made a deal with the Ripper. Swapping starting running back Damien Harris for DAA BEARS 3rd string rookie, Khalil Herbert. When asked if Jeff knew what he was doing he replied, "Absolutely. DAAA BEARS!"</p>
            <img src = {hulkRyan}/>
            <p>Meanwhile, Tim has taken notice and is looking at Allen Robinson's value skyrocket.</p>
            <img src = {timNotes}/>
            <p>Well after all DAAA BEARS trades and a gut-wrenching 109.1-108.1 loss to the Ripper and Damien Harris, guess who just dropped in the rankings to 7th place and is now on the outside looking in at his first playoff birth since joining the Tuna Bowl back in 2019? Is it Jeff Gillies? Absolutely.</p>
            <img src = {mistake}/>
          </li>
        </ol>
      </Recap>

      <Recap title = 'Week 7 Recap'>
        <p>The Patriots are now 3-4 and second place in the AFC East and have the same record as the Chiefs. They're 3 bone head plays aways from being 6-1 folks. Life is good. Not sure who wants to hear these facts but I will continue to relay them until Whitey admits Mac Jones is a god damn stud and the best QB out of this draft. I mean, look at his pace, Curt!! Look at it!! 54-13 over the Jets. LOVE IT!
          <br/><a href = 'https://twitter.com/FitzyGFY/status/1389993210391498753?s=20' target = '_blank'>https://twitter.com/FitzyGFY/status/1389993210391498753?s=20</a>
        </p>
        <p>There were a lot of lows this week so I think that's what we should focus on..</p>
        <ol>
          <li>
            <p>First things first let's address how this week kicked off with RuCunts big move. Guy's made maybe 3 roster adds all season. Meticulously climbing the waiver ladder up to the #1 spot. Where he holds it for 6 straight weeks. Smart strategy. Championship winning strategy.. Almost like he knows what he's do....wait... Then you remember Rupe has no idea what a waiver is let alone what waiver priority means. And that's how we all woke up scratching our collective heads Friday morning when we saw had Rupe used his #1 Waiver on The Green Bay Packers... A Defense.. On a Friday.. When he could have just waited until Friday morning when waivers cleared and got them as a Free Agent...</p>
            <img src = {rupeLaughWaiver}/>
            <p>Sure, if this is the 2019 Pats or the 2010 Chicago Bears defense where they averaged 19 points a game, yeah fire up that #1 Waiver and forget about it.. But the Packers? Middle of the road Packers? When you could have so easily gotten them for free? Congrats on the 14 points from GB and your second Biggest Blow Out Award win over Timmay(Also Timmay's second back to back on the losing end) but a move like that can have grave consequences, Rupe.. I say all this but after 5 years in the league I still don't think Rupe knows what we're all laughing about. Keep on keepin on, Rupe! I for one love it and just got one spot closer to #1 Priority! This might be our season's TSN Turning Point fellas! Buckle up!</p>
            <video src = {'./vid/tsnTurningPointCrop.mp4'} loop controls width = {640} height = {360}/>
          </li>
          <li>
            <p>Well, Jeff started Fields again and This Justin...Fields was miserable against the Bucs! I mean we're talking MISERABLE! Just read that Sleeper Update! Apparently Jeff missed the memo because he's carrying and starting multiple Bears every week.</p>
            <img src = {mistakeJeffFields}/>
            <p>Oh Jeff. If you weren't a Bears fan I can't help but wonder what your 0-4 record post-trade would look like if you just kept your original guys..</p>
            <p>Week 7</p>
            <ul>
              <li>J Rob: Bye</li>
              <li>Pittman: 18pts</li>
              <li>Harris: 24pts</li>
              <li>Woods: 12pts</li>
              <li>Khalil Herbert: 15pts</li>
              <li>Montgomery: Dead</li>
              <li>Fields: 1pt</li>
            </ul>
            <p>Any of the 10 QB's available on the Free Agent list: 10+ pts</p>
            <p>I think we're talking 4-0 at this point with his original team and a 3rd place 10-4 record as opposed to his now 6-8 8th place standing. Wasn't sure if Jeff was aware so I wanted to let everyone here know too. You're welcome!</p>
            <p>** Have to mention Greg with a roster churn for the ages and still pulled out this victory against Jeff. Nothing like a good old fashion roster purge 2 minutes before 2pm kickoff and Greg gave us just that. We had adds and drops flying off the shelves. But really, not sure if we congratulate Greg or just continue to shame Jeff. We'll see how Gillies makes out in Week 8.</p>
          </li>
          <li>
            <p>Louie is officially dead. All Nimbly Bibbly killed him. Took him to the curb and ended it. </p>
            <img src = {frankX}/>
            <p>This was probably Louie's best/closest chance at winning a Matchup and Frank was having none of it. Who knew Frank was a cold-blooded killer?</p>
            <p>We were all maybe even a little bit secretly rooting for Louie and thought we might see a Murray Miracle for the ages.. Then he got hurt and went into the dreaded blue tent and we all accepted Louie would never win a game the rest of his life with this roster. Then Murray came back and Frank's balls shrivelled up into his stomach. It came down to Indy's defence if Jeff wanted to pull off the upset and gain his first win of the season. Sadly he fell 4 points short and lost to All Nimbly Bibbly 91-87 in your Tightest Matchup of the Week. He's officially 0-14 and we all couldn't be happier to see it.</p>
          </li>
        </ol>
        <p>We only have 25MB available so we're out of space. Let's focus on some of the High's to wrap things up. Andy Can't Read is on a hot streak. 10 straight wins and has solidified himself in the top 3 only two games behind NPC and Mon Cunt. With a few other matchups coming down to the wire it's looking like 4th to 6th place is up for grabs. Week 8 can't come soon enough.</p>
      </Recap>

      <Recap title = 'Week 8 Shitcap'>
        <p>8 Weeks into the season and what have we learned? Never bet on the goddamn Bungles! There, there's your PSA for 2021. Survivor Pools are the goddamn worst!</p>
        <p>What a weekend of football folks. The fudge packers upset the Cards, the Jets upset the red hot Bengals, Titans with the OT comeback winner, Falcons did Falcons things and blew a very winnable game against the terrible Panthers. Big Ben isn't dead yet and proved that with a win over the Browns and last but not least how bout dem Patriots!? They're back to 4-4 and just beat up on a good Chargers offense led by Herbert and Ekeler for what feels like the 30th time in a row. They're now only one game back of the Bills for first place in the AFC East and everyone's nightmare is about to start over from scratch. Mac Jones baby! LOOK AT HIS PACE, CURTIS!!</p>
        <p>Now, onto fantasy. We had a lot of Power Shifts going on this week so let's take a look at how things stand after 8 weeks.</p>
        <ol>
          <li>
            <p>RuCunt might be the most insufferable fantasy player of all time. While we're all happy to see he's lost Henry for the season and used his #1 waiver priority on a Defense last week that he just dropped before this week but god dammit he just keeps on winning. Even without Henry he managed a 97-96 win over the "Unbeatable" Andy Can't Breathe in your tightest matchup of the week and stole the 6th spot victory over the Median. Great job Curtis. This is RuCunt's second 1 point victory and when you mix in the other wins he's gotten because Jeff thought he'd start Fields on a whim over Herbert or Ron benching 200 points against him there's only one conclusion left. Rupe is Mr. Insufferable.</p>
            <p>Yeah yeah I made this ages ago but it still applies here and it's incredible. Get off my ass, I'm tired, salty and ain't getting paid for this shit.</p>
            <img src = {mrInsufferable}/>
            <p>And with only 5 weeks left until playoffs and Rupe now sitting alone in First Place, let's just hope his luck is about to run out.</p>
          </li>
          <li>
            <p>Speaking of First Place, NPC has completely shit the bed. No excuses. Time to hit the panic button? What should have been an easy comeback win for NPC vs Frank the Tank turned out to be a total failure. Mahommes looks lost out there and it's hurting Kelce in a big way. Instead of putting up 40 points like one might expect on a Monday Nighter vs the Giants they combined for 17 and NPC lost an embarrassing one 93-80. NPC might want to cool down the smack talk, take a step back and lay low for a while until he rights the ship.</p>
            <img src = {homerDave}/>
            <p>That's an 0-2 on the week and a slide from 1st place to 2nd place, 2 games behind Mr. Insufferable. Pathetic. But hey, sometimes you just need a reality check and I think that's exactly what All Nimbly Bibbly gave NPC. Week 9 vs AndyCan't Breathe is shaping up to be a doozy.</p>
            <img src = {daveRealityCheck}/>
          </li>
          <li>
            <p>Week 8's most exhilarating matchup probably came between two feisty teams hungry for a win. It had everything you could hope for in a game between two last place teams battling it out for that prime "2nd worst record" draft pick. Including Louie's WR1, Russel Gage, playing the entire game and putting up a stat line of 0 yards on 0 receptions on 0 targets. Impressive.</p>
            <img src = {upsetLouie}/>
            <p>Honourable mention goes to Gregs TE who also put up a goose egg but at least he had 3 targets. Greg's Defence was also his highest scorer with 17 points which isn't ideal but I think Louie wins this one with his kicker...</p>
            <p>How good is Louie's kicker!!? Bags the highest point total for his whole squad with 15 points. More points than his WR1, his WR2, his TE and his Flex player COMBINED! What a stud, what a matchup. Unfortunately for Louie, his Kickers heroics weren't enough as he fell to Greg and Median 67-92. Sitting at 0-16 with a perfect season still on the horizon. Remarkable! He faces the 7-9 Rippers in Week 9 and current projections have LouCrew as 58% favourites! The Rippers are SCURRRED!</p>
            <img src = {ryanScared}/>
          </li>
          <li>
            <p>Wrap up. Rondinko's your Highest Scorer of the week 133-98 over the Rippers. Also your Biggest blow out. Congrats to Nox for squeezing into that 6th playoff spot with a big 2-0 victory over Moran who seems to be skating along with TWO back to back victories over the Median.</p>
          </li>
        </ol>
        <p>Week 9 is looking like another big one for the standings as this playoff picture is starting to unfold. A lot of bodies are trying to squeeze into those top 6 spots. Set those lineups fellas!</p>
      </Recap>

      <Recap title = 'Week 9 Recap'>
        <p>Week 9 Fellas! Sweet Christmas, what a fucking week of football. The dogs were hungry. Jags humiliated the Bills, Falcons upset the Saints, the G-Men bullied the Raiders, Browns bulldozed the Bungles, the Broncos embarrassed the Cowgirls, the Henryless Titans even beat the god damn Rams! Hell, we almost had DA Bears upset the Steelers in a coulda/woulda/shoulda Monday nighter. The Bears might have a case against the refs in that game. Usually it is what it is but that one seemed extremely lopsided in favour of the Steelers. Ah well, it's just DAA Bears and at least it's only Jeff losing sleep over it. The DOINK off the crossbar for the game winning FG was just icing on the cake. Other than that, the Pats continue their dominance on the road with their 4th straight road win over the Panthers. The Chiefs look dead as they just squeaked out a 13-7 win over the Packers sans Rodgers and the Cards managed an impressive win without any of their starters including none other than Kyler Murray..</p>
        <p>SPEAKING OF MURRAY!! Team LouCrew, haha wow. This was it. This was honestly looking like LouCrew's best chance at a W so far this season. Louie had the Rippers right where he wanted them and then he did the unthinkable... He started Kyler Murray who was legit questionable for days and gave himself no back up plan. On top of that, he then tried to plead with the fucking Tunas of all people, that he thought he could drop players who have already played after their game!? And all his other leagues allow that? I could go on and on but it's not really necessary and James Connor squashed any chances of that anyway when he took over the game dropping 40 points all over LouCrews face. Connor has that IT factor and it's about time he gets the recognition he deserves.</p>
        <p>And speaking of Kyler Murray... We have our second roster violation of the season. Goodbye LouCrew, hello "There's Something About Murray!" Here's your new team name and logo Louie. Thank you for making this all possible. It might be my favourite to date! Feel free to use the small headshot for your Sleeper Avatar so we can all enjoy that grill!</p>
        <img src = {somethingMurray}/>
        <p>Now that that's out of the way let's get down to some of the other highlights of the week.</p>
        <ol>
          <li>
            <p>The King is dead. Without star Running Back Derrick Henry, RuCunt showed us who he really is. A fantasy owner with 4 Backup RB's behind Henry and the rest could be history. Mr. Insufferable managed a paltry 74 points against Frank and went 0-2 on the week. That's two H2H losses on the season for RuCunt against NPC and the Nimbly Bibbly. Two strong playoff contenders taking care of business. That's reason enough for celebration. The King is Dead!</p>
            <img src = {danceGrave1}/>
          </li>
          <li>
            <p>Don't look now but not one, but TWO Gillies are grinding for the playoffs and one of them just got his prized possession back from IR. Jeff DAA Bears Gillies might be onto something. Trade away valuable assets early in hopes Jonathan Taylor carries your team long enough so you can use those equally valuable assets you traded for that are now good and rested.. Did that make any sense? We're about 6 beers deep at this point, try and bear with me.. While Moran was busy getting Murdered by the Median again for what feels like the 78th time this year, Gillies was stealing his wallet and waltzing his way back into playoff contention. Jeff's on a 4 game Win streak and David Montgomery is back from the dead!</p>
            <img src = {montysBack}/>
            <p>Look out!</p>
          </li>
          <li>
            <p>In other news, NPC is back on top with a dominating win over AndyCantBreathe and wins another Highest Scorer of the week award. The Rondingo continues to go under the radar, sneaking out wins and clinging to that last playoff spot. And almost forgot to mention, There's Something About Murray is still undefeated in his quest for the perfect 0-26 season. He sits at 0-18 and faces off against Moran in week 10.. What a week!</p>
          </li>
          <li>
            <p>This just in, Moran follows up another 0-2 week by mortgaging his future with another trade that reeks of desperation in hopes of sneaking into the playoffs. Love it. If Moran doesn't beat Louie with his new toy, I'll personally pay for Moran's funeral the following Tuesday because there's no way he recovers from that scenario.</p>
          </li>
          <p>Thursday's just around the corner. Don't forget to set those lineups Tunas!</p>
        </ol>
      </Recap>

      <Recap title = 'Week 10 Recap'>
        <h3>Injury Report:</h3>
        <p>Position: Tuna Bowl Recap writer
          <br/>Injury: Wrist/Hand Carpal Tunnel, Neck
          <br/>Status: Limited, Non full participation in recap
          <br/>Outlook: Game day decision, snap count likely
        </p>
        <p>Well I'm not going to sugarcoat it. That was just an ugly week of football. We had 10 blowouts this week folks and some of them were pretty surprising. The Dolphins ripped the Ravens, The Football Team battered Brady's Bucs, the Panthers crucified the Cards and Monday night finished with the 49ers ravaging the Rams. Other than that, I probably couldn't tell you much about any of the other 4 games other than Rondinko's Steelers losing in a tie to the 0-8 Lions. Because let's be honest, there's no winner in a tie. What else, what else... Oh yeah. How bout them Patriots!! 45-7 over a solid Browns team! What a dominant win. Mac N Cheese is looking confident, the Boogeymen are back and don't even get me started on that run game! That's 4 straight wins for the Pats as they climb that playoff ladder. FiveThirtyEight now has them at 74% chance to make the playoffs. Are the Pats back!??</p>
        <img src = {imBack}/>
        <p>LOOK AT HIS PACE CURTIS!! LOOK AT IT!!</p>
        <p>Alright then, let's get down to business. Now that the dust has settled from week 10, we can see a lot has shifted in the power rankings so let's sift through the wreckage with a few of the highlights and lowlights of the week.</p>
        <ol>
          <li>
            <p>First and foremost. That's the NPC we have all come to fear and admire. With his 6th Highest scorer award and 3rd biggest blowout award on the season, he wasn't having any of the Rippers smack talk leading up to this game. Just a total annihilation. NPC steam rolled the Rippers 172-74.</p>
            <img src = {steam2}/>
            <p>Yep, you read that right. 172-74. Difference of 98 points. That's more points than 8 teams scored this week alone! Impressive. Scary. A tough loss for the Rippers too since he just traded his 2022 first rounder for some reinforcements for that playoff push. Now, he's likely to put his team up for sale for the 3rd time this season. Just tough all around. Hay Rippers, next time just stay out of NPC's way.</p>
            <img src = {hayyy}/>
            <p>Baled it!</p>
          </li>
          <li>
            <p>our tightest matchup of the week came down to the final two carries of the Monday night game. Going into Monday night, AndyCantBreathe had roughly a 26 point lead while The Mutts had 3 players to play in Kittle, Mitchell and Gay. Seemed like an easy win for the Mutts, but the fantasy gods certainly made him work for it. In the final minutes, down 0.5 points and the 49ers trying to run out the clock, they handed it off 4 consecutive times to Mitchell. 1st down no gain. 2nd down -4 yards! 3rd down 8 yards! 4th down 5 yards! And the Mutts take it by 0.6 points! Congratulations Nox, you deserved that win even if Whitey feels slighted since Gay got the ol Pity Field Goal for absolutely no reason with 3 minutes left in the game down by a million which set up the entire Mitchell breakdown. Gotta love it. Unless you're whitey. Then you're completely miserable. (I'd normally insert a gif here but out of respect for the deceased, I'll just leave it as is. R.I.P AndyCantBreathe)</p>
          </li>
          <li>
            <p>Let's check in on Mr. Insufferable.. King Henry went down week 8... annnnnd checks notes..</p>
            <img src = {timNotes}/>
            <p>RuCunt is 0-4 since then. Delightful. Well done Replacements! Webber with a makeshift team after selling what appeared to be his entire roster for all of Morans and Ryans picks he still beat RuCunt! Splendid! First place 3 weeks ago and now in second place with the Bimbbly and Andy Cant Breathing down his neck. Should be an exciting finish. Either way.. The King is Dead!</p>
            <img src = {danceGrave2}/> 
          </li>
          <li>
            <p>Louie redeemed himself this week when Kyler Murray was deemed a late gameday scratch. Not again said Louie and grabbed Matty Ice off the bench. Unfortunately, Matty Ice did what Matty Ice does... and that's shit the bed for 0.68 points. Yikes. Louie can't catch a break and the undefeated streak continues now sitting at 0-20. (Eyeballs emoji)</p>
            <img src = {hole}/>
            <p>At this point, 5th and 6th place seem to be totally up for grabs with teams varying from 11 to 9 wins on the season. Every 2-0 week is huge at this point in the season.</p>
          </li>
        </ol>
        <p>Week 11 should be a doozy!</p>
      </Recap>

      <Recap title = 'Week 11 Byecap'>
        <p>This was going to be my bye week but Nox said he'd hurt himself if I didn't put something out so I'll try to keep this short and sweet. So let's get at it.</p>
        <p>Well well well, look who's the most hated team in the NFL once again! That's 5 wins in a row now for the red hot Pats, and I'm about ready to blow a Gaskin! With a matchup against the first place Titans this Sunday it's possible that.... Hell, I don't want to jinx it!!</p>
        <p>Honestly other than that a pretty tame week of football. Ravens squeaked out a victory over DAAA Bears without Lamar who apparently had a bad case of IBS leading up to the game. Vikings were too much for Rodgers and his sore pinky toe, Colts embarrassed the struggling Bills and we ended Sunday with a thriller down in LA where the Steelers and Chargers had a shootout with the Chargers coming out on top 41-37.</p>
        <p>Monday night ended as we all expected, Bucs beating up the Giants 30-10.. Is it time for the hot takes and speculation? I give it this week.. Let's say the Pats beat the Titans and move into 1st place in the AFC. Just imagine the talking heads and the media shit storm. Super Bowl 56, Bucs vs Pats, Brady vs Bill.. woah woah slow down, I can only get so erect, not to mention I already blew my Gaskin!. Roger Goodell's head might explode! One can only hope. Let's move on, I might be getting a bit side tracked..</p>
        <p>Screw it, I'm jacked up! Bye-week schmi-week, JUST SEND IT!!</p>
        <p>Week 11's in the books so let's break down some film.</p>
        <p>How about Taylor and Ekeler being flat out Fantasy Freakshows. Combined for 9 or was it 10 TDs this week! Scary stuff for anyone playing the Mutts or Team Gillies... Except when you notice Taylor put up 50 and Ekeler put up 40 and both the Mutts and Gillies only mustered 125 points on the week...? Wait, what? That's a 9 point average a piece for their remaining players.. Yikes. That's a lot of weight on those purebreds.. The calm before the storm if you will.. A lot of eggs in one basket if you catch my drift.. There's an elephant in the room and he's looking at the both of you, if you know what I mean.. There are clouds on the horizon... Any of this getting through to you guys?</p>
        <p>I'm saying both your teams suck and an implosion is inevitable!</p>
        <img src = {boomRoast}/>
        <p>Ah don't beat a dead horse..This ship has sailed.. They're called idioms, Nox! READ A BOOK!</p>
        <img src = {boomRoast}/>
        <p>Biggest Blowout: With NPC projected to win 150 to 70 it was all but a lock to win Biggest Blowout for the 7th time but he must have conceded this week so someone else could win the honour. Congrats to Jeff Gillies for trouncing his little brother Curtis 126-74 for a blowout of 52 points. The exact number of points Taylor laid on Sunday afternoon. Poetic. Just ran him over like the dirty dog he is! Brotherly love bruh!</p>
        <img src = {runOver}/>
        <p>Noteable blowouts:
          <br/>NPC vs Shane Falco's Scabs - 49 (So close to 7 blowouts!! God Dammit NPC! You blew it!)
          <br/>Mutts vs The Nimble Bubblers - 45
          <br/>Moran's Misfits vs Rondinko - 32
        </p>
        <p>Other than that it was a pretty tame weekend. When RuCunt and The Rippers 108-91 matchup was the tightest of the week you've got yourself a pretty stress-free weekend from everyone. I mean, sure.. The Rippers benched the Number 1 QB in football so he could watch Dak put up 2 points but I'm sure he doesn't need to be reminded about that. Or the fact he could have fed RuCunt his 6th straight loss if he just started his best player but again, what are ya gonna do. I'm sure The Rippers are not too hung up on it. It's not like it's the matchup he was looking forward to all season long and fell completely on his face in the biggest moment.. I'm sure he's fine..</p>
        <img src = {rainSad2}/>
        <p>Riiiight... You'll be ok Rippers. Team is looking stacked for that 2022 draft!</p>
        <p>Hmmm what else.. oh yes! LouCrew's perfect season is alive and well. Going into the matchup vs TimmaysGuts things were actually projected to be pretty close. I think we can all imagine Tim's fear when he saw the news on Sunday before kickoff that Lamar ate some bad beef at Taco Bell and his IBS acted up. Must have been pretty bad for him to have to skip the game, but hey, I get it. We've all been there. Either way that was about as close as it got. LouCrew loses 103-82. 0-2 on the week and 0-22 on the season. Timmays studs came to play and Louie's best player continues to be his kicker and that's just not going to cut it most weeks. Don't get me wrong, I love me some Big Dick Nick Folk, but he ain't going to put up the 30 extra points Louie needs every week in order to get a win. But I'm feeling generous, and have a feeling something magical is coming. LouCrew is going to silence the haters soon and it might just be thanks to the Folk Hero himself. Here's a peace offering LouCrew. If you win a matchup before the regular season ends AND Folk has more than 10 points on the day, you can change your team info. I'm a generous God. I've already found the perfect name and logo for such a special occasion.</p>
        <img src = {folkHero}/>
        <p>We've got NPC and RuCunt locked in at the top since week 1 while we've watched 3rd to 6th place change more times than Nox's gender. We've got 1 team at 18-4, 1 team at 16-6, 5 teams at 12-10 and 2 at 11-11 battling it out for 6 playoff spots. 3 weeks left fellas, this is getting good. Not sure we've ever had so much on the line this late in the season. Get after it!</p>
        <p>And with that let's wrap this week up and move on to week 12! Looks like a few people hit the Panic Trade Button going into this week so it's certainly something to keep an eye on.</p>
        <p>Set those lineups folks! </p>
      </Recap>

    </div>
  );
}