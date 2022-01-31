import './../style/codeAnimation.scss';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useRef, useState } from 'react';
import round from '../ts/round';

const CodeAnimation = () => {
    const codeString = `for _ in range(int(input())):
    n, s = int(input()), input()

t = set({s[0]})
for i in range(1, len(s)):
    if s[i] in t and s[i - 1] != s[i]:
        print("NO")
        break
    t.add(s[i])
else:
    print("YES")`

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
        <div className="code-animation-container">
            <div className="waves"></div>
            <div className="code-animation" ref={animationContainer}>
                <div className="editor" ref={editor}>
                    <div className="top-bar">
                        <div className="red"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                    </div>
                    <div className="content">
                        <SyntaxHighlighter language="python" style={theme}>
                            {code}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
            <div className="waves flipped"></div>
        </div>
    )
}

export default CodeAnimation;
