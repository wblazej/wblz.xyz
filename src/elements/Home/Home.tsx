import './home.scss';

import TypingAnimation from '../../components/typingAnimation/TypingAnimation';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <header>
            <p>Hi there! I am</p>
            <h1>Błażej Wrzosok</h1>
            <h2><TypingAnimation text="A software developer" delay={2200} /></h2>

            <Link href="#about" className="btn" to="about"
                smooth={true} spy={true} offset={-100} duration={500}>
                <span>Explore</span>
            </Link>
        </header>
    )
}

export default Home;
