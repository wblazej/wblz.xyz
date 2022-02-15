import DiscordLogo from '../../icons/DiscordLogo';
import Email from '../../icons/Email';
import GitHubLogo from '../../icons/GitHubLogo';
import GoogleCloudPlatformLogo from '../../icons/GoogleCloudPlatformLogo';
import StackoverflowLogo from '../../icons/StackoverflowLogo';
import TwitterLogo from '../../icons/TwitterLogo';
import './socials.scss';
import toast from 'react-hot-toast';

const Socials = () => {
    return (
        <div className="socials">
            <a className="social-icon" href="https://github.com/wblazej" target="_blank" rel="noreferrer">
                <GitHubLogo/>
            </a>
            <div className="social-icon" onClick={() => {
                navigator.clipboard.writeText("wblazej#6957")
                toast.success('Copied Discord username to your clipboard')
            }}>
                <DiscordLogo/>
            </div>
            <a className="social-icon" href="https://stackoverflow.com/users/13574070" target="_blank" rel="noreferrer">
                <StackoverflowLogo/>
            </a>
            <a className="social-icon" href="https://twitter.com/wblazej_" target="_blank" rel="noreferrer">
                <TwitterLogo/>
            </a>
            <a className="social-icon" href="mailto:blazej.wrzosok@gmail.com" rel="noreferrer">
                <Email/>
            </a>
            <a className="social-icon" href="https://www.cloudskillsboost.google/public_profiles/462083fe-41bc-4543-84db-1b0c42698c09" rel="noreferrer" target="_blank">
                <GoogleCloudPlatformLogo/>
            </a>
        </div>
    )
}

export default Socials;
