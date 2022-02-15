import { ReactElement } from 'react';
import classNames from 'classnames';
import Link from '../icons/Link';
import GitHubLogo from '../icons/GitHubLogo';

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

            <a href={props.website} target="_blank" rel="noreferrer" className="preview" 
                style={{ backgroundImage: `url(${props.previewURL})` }}><div></div></a>

            <div className="links">
                <a href={props.website} target="_blank" rel="noreferrer">
                    <Link/>
                </a>
                {props.repo &&
                    <a href={props.repo} target="_blank" rel="noreferrer">
                        <GitHubLogo/>
                    </a>
                }
            </div>
        </div>
    )
}

export default Project;
