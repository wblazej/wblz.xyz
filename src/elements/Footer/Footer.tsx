import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <span>&copy; {new Date().getFullYear()} Błażej Wrzosok</span>
            <span><a href="https://github.com/wblazej/personal-website" target="_blank" rel="noreferrer">Source code</a></span>
            <span>blazej.wrzosok@gmail.com</span>
        </footer>
    )
}

export default Footer;
