import TypingAnimation from '../../components/typingAnimation/TypingAnimation';
import './home.scss';

const Home = () => {
    return (
        <header>
            <p>Hi there! I am</p>
            <h1>Błażej Wrzosok</h1>
            <h2><TypingAnimation text="A software developer" delay={2200} /></h2>
            <button>Explore</button>
        </header>
    )
}

export default Home;
