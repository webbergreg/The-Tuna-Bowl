import { Recap } from '../Recap';
import { WEEK_MARKERS } from '../../icons';
import { CLOUDFRONT_DISTRO } from '../../constants';
import draft from '../../img/draft_2021.jpg';

export const Week0 = ()=>{

    const title = <>{WEEK_MARKERS.WEEK0} Draftcap</>
    return <Recap hideInfo = {true} weekInt = {0} title = {title}>
        <img className = 'fullw' src = {draft} alt = 'Draft Results'/>
        <p>It's only fitting we kick off the 2021 Tuna Bowl season with the most important week of the year. Draft Night. The gang packed their bags and traveled into uncharted territories down under to a little place called Argyle Street for a night to remember. Except they brought 600 beers with them and don't remember anything. Luckily, I had video footage of the entire evening and am able to recap some highlights.</p>
        <p>When things finally kicked off, I'll admit, she was pretty tame in the early rounds. But as the beer kept flowing, the rounds kept getting longer and longer. Guys didn't know who they were picking or when they were picking. The RuCunt was autodrafting roofied drunk, Nox was OBNOXIOUS, Louie was M.I.A. in another province and poor NPC, a generous commissioner, was left to clean up the mess. Pausing and reversing auto picks for anyone who needed it, just to keep things rolling and civil. The boys were rowdy that evening. Unfortunately for NPC, the Tunas weren't as generous as he was and during the kerfuffle and chaos he was forced to accept multiple Auto Drafted players he wanted no part of. But sometimes the role of a parent is to just roll with punches and keep the train rolling when you're dealing with unruly drunk children.</p>
        <p>The gang made it through 8 rounds before needing a break. A moment to collect themselves if you will. After a 15 minute pause, the boys came back to quite a shocking discovery..<p/>
        <p></p>An all out sabotage took place during their break and no one was there to remember it... Unless...</p>
        <video src = {`${CLOUDFRONT_DISTRO}/vid/draft_laptop_v4.mp4`} loop controls playsInline width = {640} height = {360}/>
    </Recap>
}