import { Recap } from '../Recap';
import spingolf from '../../img/spingolf.gif';
import { GolfCard } from '../GolfCard';
import curtFront from '../../img/curtFront.jpg';
import curtBack from '../../img/curtBack.jpg';
import daveFront from '../../img/daveFront.jpg';
import daveBack from '../../img/daveBack.jpg';
import frankFront from '../../img/frankFront.jpg';
import frankBack from '../../img/frankBack.jpg';
import rupeFront from '../../img/rupeFront.jpg';
import rupeBack from '../../img/rupeBack.jpg';
import louieFront from '../../img/louieFront.jpg';
import louieBack from '../../img/louieBack.jpg';
import noxFront from '../../img/noxFront.jpg';
import noxBack from '../../img/noxBack.jpg';
import ronFront from '../../img/ronFront.jpg';
import ronBack from '../../img/ronBack.jpg';
import moranFront from '../../img/moranFront.jpg';
import moranBack from '../../img/moranBack.jpg';
import timFront from '../../img/timFront.jpg';
import timBack from '../../img/timBack.jpg';
import gregFront from '../../img/gregFront.jpg';
import gregBack from '../../img/gregBack.jpg';
import ryanFront from '../../img/ryanFront.jpg';
import ryanBack from '../../img/ryanBack.jpg';
import jeffFront from '../../img/jeffFront.jpg';
import jeffBack from '../../img/jeffBack.jpg';

export const Week0 = ()=>{

    const title = <>
    <img src = {spingolf} alt = 'golf'/> 2023 Tuna Tour Draft Scramble <img src = {spingolf} alt = 'golf'/></>
    return <Recap hideInfo = {true} weekInt = {0} title = {title}>
        <p>Hey Tunas,</p>
        <p>Long time no see. Ol Capman's been laying low for the past couple years. Riding out the storm.</p>
        <p>Commish caught wind I resurfaced and asked if I'd do up something special for the boys for the 2023 Tuna Bowl Draft Scramble and I couldn't say no.</p>
        <p>Looks like you boys are having a 10-man, 3 team scramble before the draft. Smart. Everyone will be good and clear-headed for the draft afterwards. Great plan.</p>
        <p>But since there's a wide range of "talent" here in this pool, I figured you boys needed to be aggressively ranked to not stack one team by simply randomizing. So that's what I did. I ranked every one of ya for everyone to see.</p>
        <p>We'll take the bottom 3 guys and make them your team captains. Those 3 captains will perform a draft before the scramble and those will be your teams for the round. Don't know or care what you guys are playing for, but I'm sure you'll figure something out.</p>
        <p>Good luck Tunas and enjoy the 2023 Tuna Tour Rankings!</p>
        <br/>
        <br/>
        <div className = 'cards'>
            <GolfCard front = {daveFront} back = {daveBack} playerKey = {'dave'} offX = {5} offY = {20} ro = {-10}/>
            <GolfCard front = {frankFront} back = {frankBack} playerKey = {'frank'} offX = {20} offY = {10} ro = {7}/>
            <GolfCard front = {rupeFront} back = {rupeBack} playerKey = {'rupe'} offX = {-4} offY = {6} ro = {-5}/>
            <GolfCard front = {louieFront} back = {louieBack} playerKey = {'louie'} offX = {5} offY = {20} ro = {0}/>
            <GolfCard front = {noxFront} back = {noxBack} playerKey = {'nox'} offX = {12} offY = {-6} ro = {12}/>
            <GolfCard front = {ronFront} back = {ronBack} playerKey = {'ron'} offX = {20} offY = {20} ro = {-3}/>
            <GolfCard front = {moranFront} back = {moranBack} playerKey = {'moran'} offX = {2} offY = {-12} ro = {-8}/>
            <GolfCard front = {timFront} back = {timBack} playerKey = {'tim'} offX = {-13} offY = {20} ro = {14}/>
            <GolfCard front = {gregFront} back = {gregBack} playerKey = {'greg'} offX = {12} offY = {8} ro = {-8}/>
            <GolfCard front = {ryanFront} back = {ryanBack} playerKey = {'ryan'} offX = {0} offY = {30} ro = {6}/>
            <GolfCard front = {curtFront} back = {curtBack} playerKey = {'curt'} offX = {12} offY = {-2} ro = {6}/>
            <GolfCard front = {jeffFront} back = {jeffBack} playerKey = {'jeff'} offX = {-6} offY = {14} ro = {3}/>
        </div>
    </Recap>
}