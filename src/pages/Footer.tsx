import { useEffect, useState } from 'react';
import randint from '../ts/randint';
import './../style/footer.scss';
import { quotes } from './../const/content';
import ExternalLink from '../components/ExternalLink';

const Footer = () => {
    const [quoteIndex, setQuoteIndex] = useState(randint(0, quotes.length - 1))

    return (
        <footer>
            <div className="content">
                <div className="quote" onClick={() => setQuoteIndex((): number => {
                    while (true) {
                        let index: number = randint(0, quotes.length - 1)
                        if (index !== quoteIndex)
                            return index
                    }
                })}>
                    <p className="text">{quotes[quoteIndex].quote}</p>
                    <p className="author">{quotes[quoteIndex].author}</p>
                </div>
                <div className="links">
                    <div className="list">
                        <a href="#"><i className="fas fa-home"></i>Tech stack</a>
                        <a href="#"><i className="fas fa-project-diagram"></i>Projects</a>
                        <a href="#"><i className="fas fa-sticky-note"></i>About</a>
                    </div>
                    <div className="list">
                        <ExternalLink url='mailto:blazej.wrzosok@gmail.com' icon='fas fa-envelope' text='blazej.wrzosok@gmail.com' notNewTab={false} />
                        <ExternalLink url='https://github.com/wblazej' icon='fab fa-github' text='wblazej' />
                        <ExternalLink url='https://stackoverflow.com/users/13574070' icon='fab fa-stack-overflow' text='blazej' />
                        <ExternalLink url='https://twitter.com/wblazej_' icon='fab fa-twitter' text='wblazej_' />
                    </div>
                    <div className="list">
                        <ExternalLink url='https://unsplash.com/collections/QxcMxZSggS4/personal-website' icon='fab fa-unsplash' text='Photos credits' />
                        <ExternalLink url='https://fontawesome.com' icon='fab fa-font-awesome-flag' text='Icons credits' />
                    </div>
                </div>
            </div>
            <div className="copyright">&copy; {new Date().getFullYear()} Błażej Wrzosok</div>
        </footer>
    )
}

export default Footer;
