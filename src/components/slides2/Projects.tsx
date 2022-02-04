import TypingAnimation from '../typingAnimation/TypingAnimation';
import CovidWarningAppScreenshot from './../../img/projects/covid-warning-app.png';
import RepositoriesScreenshot from './../../img/projects/repositories.png';
import LinkIcon from './../../svg/LinkIcon';

const Projects = () => {
    return (
        <div className="wrapper" id="projects">
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
    )
}

export default Projects;
