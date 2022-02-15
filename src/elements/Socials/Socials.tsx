import Email from '../../icons/Email';
import GitHubLogo from '../../icons/GitHubLogo';
import StackoverflowLogo from '../../icons/StackoverflowLogo';
import TwitterLogo from '../../icons/TwitterLogo';
import './socials.scss';

const Socials = () => {
    return (
        <div className="socials">
            <ul>
                <li>
                    <a className="social-icon" href="https://github.com/wblazej" target="_blank" rel="noreferrer">
                        <GitHubLogo/>
                    </a>
                </li>
                <li>
                    <a className="social-icon" href="https://stackoverflow.com/users/13574070" target="_blank" rel="noreferrer">
                        <StackoverflowLogo/>
                    </a>
                </li>
                <li>
                    <a className="social-icon" href="https://twitter.com/wblazej_" target="_blank" rel="noreferrer">
                        <TwitterLogo/>
                    </a>
                </li>
                <li>
                    <a className="social-icon" href="mailto:blazej.wrzosok@gmail.com" rel="noreferrer">
                        <Email/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials;
