import './../style/introduction.scss';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useRef, useState } from 'react';
import round from '../ts/round';
import TechStack from '../components/slides/techStack/TechStack';
import About from '../components/slides/about/About';
import { code as codeString } from './../const/content';
import FindMe from '../components/slides/findMe/FindMe';


const CodeAnimation = () => {
    const animationContainer = useRef<HTMLDivElement>(null)
    const editor = useRef<HTMLDivElement>(null)
    const [code, setCode] = useState<string>("test")

    const onScroll = () => {
        if (animationContainer.current && editor.current) {
            let factor = window.scrollY - animationContainer.current.offsetTop + editor.current.offsetHeight
            setCode(
                codeString.substring(0, 
                    round(factor * (codeString.length / 
                        (animationContainer.current.offsetHeight - editor.current.offsetHeight)), 
                    0)
                )
            )
        }
    }

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    })

    return (
        <section className="main">
            <div className="waves"></div>
            <div className="wrapper">
                <div className="slides">
                    <TechStack/>
                    <About/>
                    <FindMe/>
                </div>
                <div className="code-animation" ref={animationContainer}>
                    <div className="code-container" ref={editor}>
                        <div className="top-bar">
                            <div className="red"></div>
                            <div className="yellow"></div>
                            <div className="green"></div>
                        </div>
                        <div className="code">
                            <SyntaxHighlighter language="python" style={theme}>
                                {code}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
            <div className="waves flipped"></div>
        </section>
    )
}

export default CodeAnimation;
