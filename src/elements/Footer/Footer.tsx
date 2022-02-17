import './footer.scss';

import { REPO } from '../../const/settings';

const Footer = () => {
    return (
        <footer>
            <span>&copy; {new Date().getFullYear()} Błażej Wrzosok</span>
            <span><a href={REPO} target="_blank" rel="noreferrer">Source code</a></span>
        </footer>
    )
}

export default Footer;
