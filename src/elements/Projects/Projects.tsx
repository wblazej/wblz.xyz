import './projects.scss';

import CovidWarningAppPreview from './../../img/projects/covid-warning-app.png';
import GitGistPreview from './../../img/projects/git-gist.png';
import VocabularyPreview from './../../img/projects/vocabulary.png';

import Python from '../../components/tags/Python';
import Reactjs from '../../components/tags/Reactjs';
import Covid from '../../components/tags/Covid';
import WebScrapping from '../../components/tags/WebScrapping';
import ClosedSource from '../../components/tags/ClosedSource';
import Project from '../../components/Project';
import GitHubAPI from '../../components/tags/GitHubAPI';
import College from '../../components/tags/College';
import Nextjs from '../../components/tags/Nextjs';
import TypeScript from '../../components/tags/TypeScript';
import Learning from '../../components/tags/Learning';
import Sass from '../../components/tags/Sass';

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
                        <TypeScript />,
                        <Python />,
                        <Sass />,
                        <Covid />,
                        <WebScrapping />,
                        <ClosedSource />
                    ]}
                    website="https://sars2.wsi.edu.pl/"
                    previewURL={CovidWarningAppPreview}
                />

                <Project
                    title="GitGist"
                    description="Uses GitHub API to list, view, create, edit and delete gists. It's just a client for GitHub Gist app. Project for college finals."
                    tags={[
                        <Reactjs />,
                        <TypeScript />,
                        <GitHubAPI />,
                        <College />
                    ]}
                    website="https://wblazej.github.io/GitGist/"
                    repo="https://github.com/wblazej/GitGist"
                    previewURL={GitGistPreview}
                    fromRight={true}
                />

                <Project
                    title="Vocabulary"
                    description="Tool for learning new vocabulary in foreign languages. Capable of creating games with words in multiple languages. Still in progress... already able to be used tho."
                    tags={[
                        <Reactjs />,
                        <TypeScript />,
                        <Sass />,
                        <Nextjs />,
                        <Learning />
                    ]}
                    website="https://quiz.v.fkrq.xyz/"
                    repo="https://github.com/wblazej/vocabulary"
                    previewURL={VocabularyPreview}
                />

                <a target="_blank" rel="norefferer" className="btn" href="https://github.com/wblazej?tab=repositories">See others</a>

                <p className="bottom-info">Other than that, I currentlly got 3 projects that are in building process...</p>
            </div>
        </section>
    )
}

export default Projects;
