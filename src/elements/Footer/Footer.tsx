import { EMAIL, REPO } from '../../const/settings';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <span>&copy; {new Date().getFullYear()} Błażej Wrzosok</span>
            <span><a href={REPO} target="_blank" rel="noreferrer">Source code</a></span>
        </footer>
    )
}

export default Footer;
