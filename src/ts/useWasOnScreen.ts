import { useState, useEffect, RefObject } from "react"
import useWindowSize from "./useWindowSize"

const useWasOnScreen = (ref: RefObject<HTMLElement>) => {
    const { height } = useWindowSize()
    const [wasOnScreen, setWasOnScreen] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && !wasOnScreen && setWasOnScreen(true),
            {
                "rootMargin": `-${height / 3}px 0px`,
            }
        )

        if (ref.current)
            observer.observe(ref.current)

        return () => { observer.disconnect() }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, height])

    return wasOnScreen
}

export default useWasOnScreen;
