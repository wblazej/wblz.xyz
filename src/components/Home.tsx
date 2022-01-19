import './../style/home.scss';
import Typist from 'react-typist';


const Home = () => {
    return (
        <div className="home-container">
            <nav>
                <a href="#">Tech stack</a>
                <a href="#">Projects</a>
                <a href="#">Thoughts</a>
            </nav>
            <header>
                <p className="hi-there">Hi there 👋</p>
                <p>I'm</p>
                <h1>Błażej Wrzosok</h1>

                <p>
                    <Typist>A software developer</Typist>
                </p>
            </header>
        </div>
    )
}

export default Home;
