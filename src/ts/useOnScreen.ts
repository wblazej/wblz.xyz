import { useState, useEffect, RefObject } from "react"

const useOnScreen = (ref: RefObject<HTMLElement>) => {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
        if (ref.current)
            observer.observe(ref.current)

        return () => { observer.disconnect() }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]) 

    return isIntersecting
}

export default useOnScreen;
