import './section.scss';

import React from "react";
import classNames from "classnames";
import useWasOnScreen from "../../ts/useWasOnScreen";

export interface SectionProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    name: string;
    header: string;
}

const Section: React.FunctionComponent<SectionProps> = (props) => {
    const { children, ...attributes } = props;
    const sectionRef = React.createRef<HTMLTableSectionElement>()
    const wasOnScreen = useWasOnScreen(sectionRef)

    return (
        <section {...attributes} id={props.name} ref={sectionRef}
            className={classNames(props.name, wasOnScreen && "visible")}>
            <div className="header">
                <h3>{props.header}</h3>
                <div className="break-line"></div>
            </div>
            <div className="section-content">
                {children}
            </div>
        </section>
    )
}

export default Section;
