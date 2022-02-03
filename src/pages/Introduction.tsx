import './../style/introduction.scss';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useRef, useState } from 'react';
import round from '../ts/round';

import CSSLogo from './../svg/tech/CSSLogo';
import HTMLLogo from './../svg/tech/HTMLLogo';
import ReactLogo from './../svg/tech/ReactLogo';
import JavaScriptLogo from './../svg/tech/JavaScriptLogo';
import TypeScriptLogo from './../svg/tech/TypeScriptLogo';
import PythonLogo from './../svg/tech/PythonLogo';
import FlaskLogo from './../svg/tech/FlaskLogo';
import MySQLLogo from './../svg/tech/MySQLLogo';
import PostgreSQLLogo from './../svg/tech/PostgreSQLLogo';
import RedisLogo from './../svg/tech/RedisLogo';
import GitLogo from './../svg/tech/GitLogo';
import DockerLogo from './../svg/tech/DockerLogo';
import RubyLogo from './../svg/tech/RubyLogo';
import RailsLogo from './../svg/tech/RailsLogo';
import GoogleCloudLogo from './../svg/tech/GoogleCloudLogo';
import CPlusPlusLogo from './../svg/tech/CPlusPlusLogo';
import shuffle from './../ts/shuffle';
import TypingAnimation from './../components/TypingAnimation';

const CodeAnimation = () => {
    const [technologies] = useState(shuffle([CSSLogo, HTMLLogo, ReactLogo, JavaScriptLogo, TypeScriptLogo, 
        PythonLogo, FlaskLogo, MySQLLogo, PostgreSQLLogo, RedisLogo,
        GitLogo, DockerLogo, RubyLogo, RailsLogo, GoogleCloudLogo, CPlusPlusLogo]))

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
        <section className="main">
            <div className="waves"></div>
            <div className="wrapper">
                <div className="slides">
                    <div className="slide">
                        <h2>Tech stack</h2>
                        <p>technologies I'm fimiliar with</p>
                        <div>{technologies.map((Icon, i) => <div className="item" key={i}><Icon/></div>)}</div>
                    </div>
                    <div className="slide">
                        <h2>About</h2>
                        <p>Hi there 👋<br/>I'm a full stack software developer, cybersecurity researcher and highschool student at the same time. I have been walking on Earth 🌍 for 17 years now and the first step was done in Poland 🇵🇱🇵🇱. I love to gain new skills and knowledge, however, I truly hate memorizing</p>
                        <p></p>
                        {/* <div>{technologies.map((Icon, i) => <div className="item" key={i}><Icon/></div>)}</div> */}
                    </div>
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
