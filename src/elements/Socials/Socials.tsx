import './socials.scss';

const Socials = () => {
    return (
        <div className="socials">
            <ul>
                <li>
                    <a href="https://github.com/wblazej" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/13574070" target="_blank" rel="noreferrer">
                        <i className="fab fa-stack-overflow"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/wblazej_" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:blazej.wrzosok@gmail.com" rel="noreferrer">
                        <i className="fas fa-envelope-square"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials;
