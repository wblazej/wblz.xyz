import './projects.scss';

import CovidWarningAppPreview from './../../img/projects/covid-warning-app.png';
import GitGistPreview from './../../img/projects/git-gist.png';
import VocabularyPreview from './../../img/projects/vocabulary.png';
import PyFractPreview from './../../img/projects/pyfract.png';

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
import Math from '../../components/tags/Math';
import { GITHUB } from '../../const/settings';

const Projects = () => {
    return (
        <>
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
                website="https://covid.wblz.xyz/"
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
                website="https://gists.wblz.xyz/"
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
                website="https://wblazej.github.io/vocabulary/"
                repo="https://github.com/wblazej/vocabulary"
                previewURL={VocabularyPreview}
            />

            <Project
                title="PyFract"
                description="A simple implementation of fraction numbers in Python. In some cases it is better than default Python library for fractions."
                tags={[
                    <Python />,
                    <Math />
                ]}
                website="https://pypi.org/project/pyfract/"
                repo="https://github.com/wblazej/pyfract"
                previewURL={PyFractPreview}
                fromRight={true}
            />

            <a target="_blank" rel="noreferrer" className="btn" href={`${GITHUB}?tab=repositories`}>See others</a>
        </>
    )
}

export default Projects;
