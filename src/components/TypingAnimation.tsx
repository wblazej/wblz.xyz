import { useEffect, useState } from 'react';
import './../style/typingAnimation.scss';
import classNames from 'classnames';

interface IProps {
    text: string;
    speed?: number;
    delay?: number;
}

const TypingAnimation = (props: IProps) => {
    const [position, setPosition] = useState(0)
    const [whileTyping, setWhileTyping] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setWhileTyping(true)

            const clock = setInterval(() => {
                setPosition(position => {
                    if (position === props.text.length - 1) {
                        setWhileTyping(false)
                        clearInterval(clock)
                    }
                    return position + 1
                })
            }, Math.round(1000 / (props.speed ? props.speed : 20)))
        }, props.delay ? props.delay : 0)
    }, [setPosition])

    return (
        <span className="typing-animation">
            <span className="text">{props.text.substring(0, position)}</span>
            <span className={classNames("cursor", !whileTyping && "blinking")}>|</span>
        </span>
    )
}

export default TypingAnimation;
