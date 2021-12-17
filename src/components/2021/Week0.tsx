import { Recap } from '../Recap';
import { WEEK_MARKERS } from '../../icons';

export const Week0 = ()=>{

    const title = <>{WEEK_MARKERS.WEEK0} The Draft {WEEK_MARKERS.WEEK0}</>
    return <Recap weekInt = {0} title = {title}>
        <video src = {`${process.env.PUBLIC_URL}/draft_laptop_v3.mp4`} loop controls width = {640} height = {360}/>
    </Recap>
}