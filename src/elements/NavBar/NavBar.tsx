import { useEffect, useState } from 'react';
import './navBar.scss';
import classNames from 'classnames';
import { Link } from 'react-scroll';

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
                        <Link to="home" smooth={true} spy={true} offset={-100} duration={300}><span>Home</span></Link>
                    </div>
                    <div className="section">
                        <Link to="about" smooth={true} spy={true} offset={-100} duration={300}><span>About</span></Link>
                    </div>
                    <div className="section">
                        <Link to="projects" smooth={true} spy={true} offset={-100} duration={300}><span>Projects</span></Link>
                    </div>
                    <div className="section">
                        <Link to="footer" smooth={true} spy={true} offset={-100} duration={300}><span>Contact</span></Link>
                    </div>
                </div>
                <div className="progress-bar"></div>
            </nav>
        </div>
    )
}

export default NavBar;
