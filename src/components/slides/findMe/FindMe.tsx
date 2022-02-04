import './findMe.scss';
import ExternalLink from '../../ExternalLink';

const FindMe = () => {
    return (
        <div className="slide">
            <h2>Find me</h2>
            <div className="slide-content-container">
                <div className="slide-content" id="find-me">
                    <p>Go ahead... contact me and share some feedback</p>
                    <ExternalLink url='mailto:blazej.wrzosok@gmail.com' icon='fas fa-envelope' text='blazej.wrzosok@gmail.com' notNewTab={false} />
                    <ExternalLink url='https://github.com/wblazej' icon='fab fa-github' text='wblazej' />
                    <ExternalLink url='https://stackoverflow.com/users/13574070' icon='fab fa-stack-overflow' text='blazej' />
                    <ExternalLink url='https://twitter.com/wblazej_' icon='fab fa-twitter' text='wblazej_' />
                </div>
            </div>
        </div>
    )
}

export default FindMe;
