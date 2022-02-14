import { useState } from 'react';
import randint from '../../ts/randint';
import './footer.scss';
import { quotes } from '../../const/content';
import toast from 'react-hot-toast';

const Footer = () => {
    const [quoteIndex, setQuoteIndex] = useState(randint(0, quotes.length - 1))

    return (
        <footer>
            <div className="header">
                <h3>Share feedback</h3>
                <div className="break-line"></div>
            </div>

            <div className="section-content">
                <p>I'd love to hear from you. Share some feedback or just say hello</p>

                <div className="buttons">
                    <a className='btn' href="mailto:blazej.wrzosok@gmail.com">Send e-mail</a>

                    <button onClick={() => {
                        navigator.clipboard.writeText("blazej.wrzosok@gmail.com")
                        toast.success('Copied to your clipboard')
                    }} className='btn'>Copy e-mail</button>
                </div>
            </div>

            <div className="copyright">
                <span>&copy; {new Date().getFullYear()} Błażej Wrzosok</span>
                <span><a href="https://github.com/wblazej/personal-website" target="_blank" rel="norefferer">Source code</a></span>
                <span>blazej.wrzosok@gmail.com</span>
            </div>
        </footer>
    )
}

export default Footer;
