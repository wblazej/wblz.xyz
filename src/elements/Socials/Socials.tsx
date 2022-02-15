import DiscordLogo from '../../icons/DiscordLogo';
import Email from '../../icons/Email';
import GitHubLogo from '../../icons/GitHubLogo';
import GoogleCloudPlatformLogo from '../../icons/GoogleCloudPlatformLogo';
import StackoverflowLogo from '../../icons/StackoverflowLogo';
import TwitterLogo from '../../icons/TwitterLogo';
import './socials.scss';
import toast from 'react-hot-toast';
import { DISCORD, EMAIL, GITHUB, GOOGLE_CLOUD, STACKOVERFLOW, TWITTER } from '../../const/settings';

const Socials = () => {
    return (
        <div className="socials">
            <a aria-label="Link to GitHub profile" className="social-icon" href={GITHUB} target="_blank" rel="noreferrer">
                <GitHubLogo/>
            </a>
            <div className="social-icon" onClick={() => {
                navigator.clipboard.writeText(DISCORD)
                toast.success('Copied Discord username to your clipboard!')
            }}>
                <DiscordLogo/>
            </div>
            <a aria-label="Link to Stackoverflow profile" className="social-icon" href={STACKOVERFLOW} target="_blank" rel="noreferrer">
                <StackoverflowLogo/>
            </a>
            <a aria-label="Link to Twitter profile" className="social-icon" href={TWITTER} target="_blank" rel="noreferrer">
                <TwitterLogo/>
            </a>
            <a aria-label="Link to open mail client with new e-mail" className="social-icon" href={`mailto:${EMAIL}`} rel="noreferrer">
                <Email/>
            </a>
            <a aria-label="Link to Google Cloud Platform profile" className="social-icon" href={GOOGLE_CLOUD} rel="noreferrer" target="_blank">
                <GoogleCloudPlatformLogo/>
            </a>
        </div>
    )
}

export default Socials;
