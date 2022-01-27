import { useState } from 'react';

import CSSLogo from './../../svg/tech/CSSLogo';
import HTMLLogo from './../../svg/tech/HTMLLogo';
import ReactLogo from './../../svg/tech/ReactLogo';
import JavaScriptLogo from './../../svg/tech/JavaScriptLogo';
import TypeScriptLogo from './../../svg/tech/TypeScriptLogo';
import PythonLogo from './../../svg/tech/PythonLogo';
import FlaskLogo from './../../svg/tech/FlaskLogo';
import MySQLLogo from './../../svg/tech/MySQLLogo';
import PostgreSQLLogo from './../../svg/tech/PostgreSQLLogo';
import RedisLogo from './../../svg/tech/RedisLogo';
import GitLogo from './../../svg/tech/GitLogo';
import DockerLogo from './../../svg/tech/DockerLogo';
import RubyLogo from './../../svg/tech/RubyLogo';
import RailsLogo from './../../svg/tech/RailsLogo';
import GoogleCloudLogo from './../../svg/tech/GoogleCloudLogo';
import CPlusPlusLogo from './../../svg/tech/CPlusPlusLogo';
import shuffle from './../../ts/shuffle';
import TypingAnimation from '../TypingAnimation';

const TechStack = () => {
    const [technologies] = useState(shuffle([CSSLogo, HTMLLogo, ReactLogo, JavaScriptLogo, TypeScriptLogo, 
        PythonLogo, FlaskLogo, MySQLLogo, PostgreSQLLogo, RedisLogo,
        GitLogo, DockerLogo, RubyLogo, RailsLogo, GoogleCloudLogo, CPlusPlusLogo]))
        
    return (
        <div className="wrapper" id="tech-stack">
            <div className="header-panel">
                <div className="header">
                    <h2>tech stack</h2>
                    <p>
                        <TypingAnimation text="technologies I'm familiar with" startOnDisplay={true} delay={1000} />
                    </p>
                </div>
            </div>
            <div className="card-content">
                {technologies.map((Icon, i) => <div className="item" key={i}><Icon/></div>)}
            </div>
        </div>
    )
}

export default TechStack;
