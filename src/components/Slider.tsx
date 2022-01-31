import { ReactElement, useEffect, useRef } from 'react';
import round from './../ts/round';
import './../style/slider.scss';

interface IProps {
    items: Array<ReactElement>;
    scrollFactor?: number;
}

const Slider = (props: IProps) => {
    const refferences = useRef<Array<HTMLDivElement | null>>([])

    const onScroll = () => {
        refferences.current.forEach((element, index) => {
            let current = element
            let next = refferences.current[index + 1]
            if (next && current) {
                let scale = round(Math.max(0, Math.min(1, (next.offsetTop - window.scrollY) / 
                    (window.innerHeight / (props.scrollFactor ? props.scrollFactor : 1.5)))), 2)

                if (current.style.transform !== `scale(${scale})`)
                    current.style.transform = `scale(${scale})`
            }
        })
    }

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [props.scrollFactor, props.items])

    return (
        <div className="cards">
            {props.items.map((item, i) => 
                <div key={i} className="card" ref={(element) => {refferences.current[i] = element}}>
                    <div className="content">{item}</div>
                </div>
            )}
        </div>   
    )
}

export default Slider;
