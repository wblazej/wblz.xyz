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
        <nav className={classNames("nav-bar", isDown && "down")}>
            <Link to="home" smooth={true} spy={true} offset={-100} duration={500}><span>Home</span></Link>
            <Link to="about" smooth={true} spy={true} offset={-100} duration={500}><span>About</span></Link>
            <Link to="projects" smooth={true} spy={true} offset={-100} duration={500}><span>Projects</span></Link>
            <Link to="contact" smooth={true} spy={true} offset={-200} duration={500}><span>Contact</span></Link>
        </nav>
    )
}

export default NavBar;
