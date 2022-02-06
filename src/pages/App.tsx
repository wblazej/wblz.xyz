import TypingAnimation from '../components/typingAnimation/TypingAnimation';
import './../style/app.scss';

const App = () => {
    return (
        <div className="app">
            <div className="nav-bar">
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
                                <span>Footer</span>
                            </a>
                        </div>
                    </div>
                    <div className="progress-bar"></div>
                </nav>
            </div>

            <div className="socials">
                <ul>
                    <li>
                        <a href="https://github.com/wblazej" target="_blank" rel='norefferer'>
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/13574070" target="_blank" rel='norefferer'>
                            <i className="fab fa-stack-overflow"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/wblazej_" target="_blank" rel='norefferer'>
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:blazej.wrzosok@gmail.com" rel='norefferer'>
                            <i className="fas fa-envelope-square"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <header>
                <p>Hi there! I am</p>
                <h1>Błażej Wrzosok</h1>
                <h2><TypingAnimation text="A software developer" delay={2200} /></h2>
                <button>Explore</button>
            </header>
        </div>
    )
}

export default App;
