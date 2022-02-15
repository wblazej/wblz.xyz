import classNames from "classnames";
import React, { useEffect, useState } from "react";
import useOnScreen from "../../ts/useOnScreen";
import './section.scss';

export interface SectionProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    name: string;
    header: string;
}

const Section: React.FunctionComponent<SectionProps> = (props) => {
    const {children, ...attributes} = props;
    const sectionRef = React.createRef<HTMLTableSectionElement>()
    const isOnScreen = useOnScreen(sectionRef)
    const [shown, setShown] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (isOnScreen && !shown) {
            setShown(true)
            setVisible(true)
        }
    }, [isOnScreen])

    return (
        <section {...attributes} className={classNames(props.name, visible && "visible")} ref={sectionRef}>
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
