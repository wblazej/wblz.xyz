import './../style/home.scss';
import Terminal from '../svg/Terminal';
import TypingAnimation from '../components/TypingAnimation';

const Home = () => {
    return (
        <div className="home-container">
            <nav>
                <a href="#">Tech stack</a>
                <a href="#">Projects</a>
                <a href="#">About</a>
            </nav>
            <header>
                <div className="name">
                    <p className="hi-there">Hi there 👋</p>
                    <p>I'm</p>
                    <h1>Błażej Wrzosok</h1>

                    <p>
                        <TypingAnimation text="A software developer" delay={1000} />
                    </p>
                </div>
                <div className="image">
                    <Terminal/>
                </div>
            </header>
        </div>
    )
}

export default Home;
