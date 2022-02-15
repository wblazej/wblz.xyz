import { ReactElement } from 'react';
import classNames from 'classnames';
import Link from '../icons/Link';
import GitHubLogo from '../icons/GitHubLogo';
import React, { useEffect, useState } from "react";
import useOnScreen from "./../ts/useOnScreen";

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
    const isOnScreen = useOnScreen(projectRef)
    const [shown, setShown] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (isOnScreen && !shown) {
            setShown(true)
            setVisible(true)
        }
    }, [isOnScreen])

    return (
        <div ref={projectRef} className={classNames("project", props.fromRight && "from-right", visible && "visible")}>
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
