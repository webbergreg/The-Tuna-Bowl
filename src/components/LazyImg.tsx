import { useEffect, useRef, useState } from 'react';
import placeholder from '../img/placeholder.png';
import { randomIntFromInterval } from '../util';

const LazyImg = props => {
    const [inView, setInView] = useState(false);
    const [offset, setOffset] = useState({x:0, y:0});

    const placeholderRef = useRef();
    useEffect(() => {

        const x = randomIntFromInterval(-10,10);
        const y = randomIntFromInterval(-10,10);
        setOffset({x,y});

        const observer = new IntersectionObserver((entries, obs) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            }
        }, {});
        observer.observe(placeholderRef.current);
        return () => {
            observer.disconnect();
        }
    }, []);

    //make the images not lined up
    const style = {transform:`translate(${offset.x}px, ${offset.y}px)`};

    return (
        inView ? <img style = {style} {...props} alt={props.alt || ""} /> : <img {...props} ref={placeholderRef} src={placeholder} alt={props.alt || ""} />
    )
};

export default LazyImg;