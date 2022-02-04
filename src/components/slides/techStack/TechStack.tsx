import { useState } from 'react';
import './techStack.scss';

import CSSLogo from './svg/CSSLogo';
import HTMLLogo from './svg/HTMLLogo';
import ReactLogo from './svg/ReactLogo';
import JavaScriptLogo from './svg/JavaScriptLogo';
import TypeScriptLogo from './svg/TypeScriptLogo';
import PythonLogo from './svg/PythonLogo';
import FlaskLogo from './svg/FlaskLogo';
import MySQLLogo from './svg/MySQLLogo';
import PostgreSQLLogo from './svg/PostgreSQLLogo';
import RedisLogo from './svg/RedisLogo';
import GitLogo from './svg/GitLogo';
import DockerLogo from './svg/DockerLogo';
import RubyLogo from './svg/RubyLogo';
import RailsLogo from './svg/RailsLogo';
import GoogleCloudLogo from './svg/GoogleCloudLogo';
import CPlusPlusLogo from './svg/CPlusPlusLogo';
import shuffle from './../../../ts/shuffle';

const TechStack = () => {
    const [technologies] = useState(shuffle([CSSLogo, HTMLLogo, ReactLogo, JavaScriptLogo, TypeScriptLogo, 
        PythonLogo, FlaskLogo, MySQLLogo, PostgreSQLLogo, RedisLogo,
        GitLogo, DockerLogo, RubyLogo, RailsLogo, GoogleCloudLogo, CPlusPlusLogo]))
    return (
        <div className="slide">
            <h2>Tech stack</h2>
            <div className="slide-content-container">
                <div className="slide-content" id="tech-stack">
                    {technologies.map((Icon, i) => <div className="item" key={i}><Icon/></div>)}
                </div>
            </div>
        </div>
    )
}

export default TechStack;
