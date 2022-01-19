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

const Slides = () => {
    return (
        <div className="cards-container">
			<ul id="cards">
                <li className="card">
                    <div className="content">
                        <div className="header-panel" id="tech-stack">
                            <div className="header">
                                <h2>tech stack</h2>
                                <p>technologies I'm familiar with</p>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="item"><CSSLogo /></div>
                            <div className="item"><HTMLLogo /></div>
                            <div className="item"><ReactLogo /></div>
                            <div className="item"><JavaScriptLogo /></div>
                            <div className="item"><TypeScriptLogo /></div>
                            <div className="item"><PythonLogo /></div>
                            <div className="item"><FlaskLogo /></div>
                            <div className="item"><MySQLLogo /></div>
                            <div className="item"><PostgreSQLLogo /></div>
                            <div className="item"><RedisLogo /></div>
                            <div className="item"><GitLogo /></div>
                            <div className="item"><DockerLogo /></div>
                            <div className="item"><RubyLogo /></div>
                            <div className="item"><RailsLogo /></div>
                            <div className="item"><GoogleCloudLogo /></div>
                            <div className="item"><CPlusPlusLogo /></div>
                        </div>
                    </div>
                </li>
				<li className="card">
					<div className="content">
						
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
