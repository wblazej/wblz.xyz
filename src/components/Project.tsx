import React, { ReactElement } from "react";
import classNames from 'classnames';
import Link from '../icons/Link';
import GitHubLogo from '../icons/GitHubLogo';
import useWasOnScreen from "../ts/useWasOnScreen";

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
    const projectRef = React.createRef<HTMLDivElement>()
    const wasOnScreen = useWasOnScreen(projectRef)

    return (
        <div ref={projectRef} className={classNames("project", props.fromRight && "from-right", wasOnScreen && "visible")}>
            <div className="description">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className="tags">
                    {props.tags.map((tag, i) => <div key={i}>{tag}</div>)}
                </div>
            </div>

            <a aria-label={`Link to deployment of project ${props.title}`} href={props.website} target="_blank" rel="noreferrer" className="preview"
                style={{ backgroundImage: `url(${props.previewURL})` }}><div></div></a>

            <div className="links">
                <a aria-label={`Link to deployment of project ${props.title}`} href={props.website} target="_blank" rel="noreferrer">
                    <Link />
                </a>
                {props.repo &&
                    <a aria-label={`Link to repository of project ${props.title}`} href={props.repo} target="_blank" rel="noreferrer">
                        <GitHubLogo />
                    </a>
                }
            </div>
        </div>
    )
}

export default Project;
