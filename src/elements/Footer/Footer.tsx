import { useState } from 'react';
import randint from '../../ts/randint';
import './footer.scss';
import { quotes } from '../../const/content';

const Footer = () => {
    const [quoteIndex, setQuoteIndex] = useState(randint(0, quotes.length - 1))

    return (
        <footer>
            <span>&copy; {new Date().getFullYear()} Błażej Wrzosok</span>
            <span><a href="https://github.com/wblazej/personal-website" target="_blank" rel="norefferer">Source code</a></span>
            <span>blazej.wrzosok@gmail.com</span>
        </footer>
    )
}

export default Footer;
