import './../style/slides.scss';

import CSSLogo from '../svg/tech/CSSLogo';
import HTMLLogo from '../svg/tech/HTMLLogo';
import ReactLogo from '../svg/tech/ReactLogo';
import JavaScriptLogo from '../svg/tech/JavaScriptLogo';
import TypeScriptLogo from '../svg/tech/TypeScriptLogo';
import PythonLogo from '../svg/tech/PythonLogo';
import FlaskLogo from '../svg/tech/FlaskLogo';
import MySQLLogo from '../svg/tech/MySQLLogo';
import PostgreSQLLogo from '../svg/tech/PostgreSQLLogo';
import RedisLogo from '../svg/tech/RedisLogo';
import GitLogo from '../svg/tech/GitLogo';
import DockerLogo from '../svg/tech/DockerLogo';
import RubyLogo from '../svg/tech/RubyLogo';
import RailsLogo from '../svg/tech/RailsLogo';
import GoogleCloudLogo from '../svg/tech/GoogleCloudLogo';
import CPlusPlusLogo from '../svg/tech/CPlusPlusLogo';
import { useState } from 'react';
import shuffle from '../ts/shuffle';
import TypingAnimation from './TypingAnimation';
import CovidWarningAppScreenshot from './../img/projects/covid-warning-app.png';
import RepositoriesScreenshot from './../img/projects/repositories.png';
import LinkIcon from '../svg/LinkIcon';

const Slides = () => {
    const [technologies] = useState(shuffle([CSSLogo, HTMLLogo, ReactLogo, JavaScriptLogo, TypeScriptLogo, 
                                    PythonLogo, FlaskLogo, MySQLLogo, PostgreSQLLogo, RedisLogo,
                                    GitLogo, DockerLogo, RubyLogo, RailsLogo, GoogleCloudLogo, CPlusPlusLogo]))
    return (
        <div className="cards-container">
			<ul id="cards">
                <li className="card" id="tech-stack">
                    <div className="content">
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
                </li>
				<li className="card" id="projects">
					<div className="content">
                        <div className="header-panel">
                            <div className="header">
                                <h2>projects</h2>
                                <p>
                                    <TypingAnimation text="public projects I worked on" startOnDisplay={true} delay={1000} />
                                </p>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="item">
                                <p>Covid Warning App</p>
                                <a className="preview" href='https://sars2.wsi.edu.pl/' target="_blank" rel="noreferrer" style={{backgroundImage: `url(${CovidWarningAppScreenshot})`}}>
                                    <div className="on-hover-content"><LinkIcon/></div>
                                </a>
                            </div>
                            <div className="item">
                                <p>The others</p>
                                <a className="preview" href='https://github.com/wblazej?tab=repositories' target="_blank" rel="noreferrer" style={{backgroundImage: `url(${RepositoriesScreenshot})`}}>
                                    <div className="on-hover-content"><LinkIcon/></div>
                                </a>
                            </div>
                        </div>
					</div>
				</li>
				<li className="card">
					<div className="content">
						
					</div>
				</li>
			</ul>
		</div>
    )
}

export default Slides;
