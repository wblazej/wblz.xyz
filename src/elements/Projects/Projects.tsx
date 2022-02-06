import './projects.scss';
import CovidWarningAppPreview from './../../img/projects/covid-warning-app.png';

const Projects = () => {
    return (
        <section className="projects">
            <div className="header">
                <h3>Projects</h3>
                <div className="break-line"></div>
            </div>
            <div className="section-content">
                <div className="project">
                    <div className="description">
                        <h4>Covid Warning App</h4>
                        <p>Introduces the current situation of SARS-CoV-2 pandemic in particular districts in Poland. Made to be easy and simple for end users, no complex data and charts. Created during apprenticeships.</p>
                        <div className="tags">
                            <span>React.js</span>
                            <span>Python</span>
                            <span>Covid</span>
                            <span>Web scrapping</span>
                            <span>Closed source</span>
                        </div>
                    </div>
                    <div className="preview">
                        <img src={CovidWarningAppPreview} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
