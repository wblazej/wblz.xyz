import './projects.scss';
import CovidWarningAppPreview from './../../img/projects/covid-warning-app.png';
import Python from '../../components/tags/Python';
import Reactjs from '../../components/tags/Reactjs';
import Covid from '../../components/tags/Covid';
import WebScrapping from '../../components/tags/WebScrapping';
import ClosedSource from '../../components/tags/ClosedSource';
import { ReactElement } from 'react';
import classNames from 'classnames';

interface IProps {
    title: string;
    description: string;
    tags: Array<ReactElement>;
    previewURL: string;
    website: string;
    repo?: string;
    fromRight?: boolean;
}

const Project = (props: IProps) => {
    return (
        <div className={classNames("project", props.fromRight && "from-right")}>
            <div className="description">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="tags">
                    {props.tags.map((tag, i) => <div key={i}>{tag}</div>)}
                </div>
            </div>
            <div className="preview" style={{ backgroundImage: `url(${props.previewURL})` }}></div>
            <div className="links">
                <div className="item"><a href={props.website} target="_blank" rel="norefferer"><i className="fas fa-link"></i></a></div>
                {props.repo &&
                    <div className="item"><a href={props.repo} target="_blank" rel="norefferer"><i className="fab fa-github"></i></a></div>
                }
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section className="projects">
            <div className="header">
                <h3>Projects</h3>
                <div className="break-line"></div>
            </div>
            <div className="section-content">
                <Project
                    title="Covid Warning App"
                    description="Introduces the current situation of SARS-CoV-2 pandemic in particular districts in Poland. Made to be easy and simple for end users, no complex data and charts. Created during apprenticeships."
                    tags={[
                        <Reactjs />,
                        <Python />,
                        <Covid />,
                        <WebScrapping />,
                        <ClosedSource />
                    ]}
                    website="https://sars2.wsi.edu.pl/"
                    previewURL={CovidWarningAppPreview}
                />

                <Project
                    title="Covid Warning App"
                    description="Introduces the current situation of SARS-CoV-2 pandemic in particular districts in Poland. Made to be easy and simple for end users, no complex data and charts. Created during apprenticeships."
                    tags={[
                        <Reactjs />,
                        <Python />,
                        <Covid />,
                        <WebScrapping />,
                        <ClosedSource />
                    ]}
                    website="https://sars2.wsi.edu.pl/"
                    repo="https://github.com/wblazej"
                    previewURL={CovidWarningAppPreview}
                    fromRight={true}
                />
            </div>
        </section>
    )
}

export default Projects;
