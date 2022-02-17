import './typingAnimation.scss';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import useOnScreen from '../../ts/useOnScreen';

interface IProps {
    text: string;
    speed?: number;
    delay?: number;
    startOnDisplay?: boolean;
}

const TypingAnimation = (props: IProps) => {
    const element = React.createRef<HTMLSpanElement>()
    const [position, setPosition] = useState(0)
    const [whileTyping, setWhileTyping] = useState(false)
    const [startedThread, setStartedThread] = useState(false)

    const isVisible = useOnScreen(element)

    useEffect(() => {
        if (!startedThread) {
            if (!props.startOnDisplay || (props.startOnDisplay && isVisible)) {
                setStartedThread(true)
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
            }
        }
    }, [props, setPosition, isVisible, startedThread])

    return (
        <span className="typing-animation" ref={element}>
            <span className="text">{props.text.substring(0, position)}</span>
            <span className={classNames("cursor", !whileTyping && "blinking")}>|</span>
        </span>
    )
}

export default TypingAnimation;
