import { useState, useEffect, RefObject } from "react"
import useWindowSize from "./useWindowSize"

const useOnScreen = (ref: RefObject<HTMLElement>) => {
    const { height } = useWindowSize()
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            {
                "rootMargin": `-${height / 3}px 0px`,
            }
        )

        if (ref.current)
            observer.observe(ref.current)

        return () => { observer.disconnect() }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, height])

    return isVisible
}

export default useOnScreen;
