import { useEffect, useState } from 'react';
import './navBar.scss';
import classNames from 'classnames';

const NavBar = () => {
    const [isDown, setIsDown] = useState(window.scrollY > 50)

    const onScroll = () => setIsDown(window.scrollY > 50)

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', () => onScroll);
    }, [])

    return (
        <div className={classNames("nav-bar", isDown && "down")}>
            <nav>
                <div className="sections">
                    <div className="section">
                        <a href="/">
                            <span>Home</span>
                        </a>
                    </div>
                    <div className="section">
                        <a href="/">
                            <span>About</span>
                            </a>
                    </div>
                    <div className="section">
                        <a href="/">
                            <span>Projects</span>
                        </a>
                    </div>
                    <div className="section">
                        <a href="/">
                            <span>Contact</span>
                        </a>
                    </div>
                </div>
                <div className="progress-bar"></div>
            </nav>
        </div>
    )
}

export default NavBar;
