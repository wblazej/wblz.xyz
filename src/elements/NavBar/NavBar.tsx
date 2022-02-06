import './navBar.scss';

const NavBar = () => {
    return (
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
    )
}

export default NavBar;
