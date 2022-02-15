import './contact.scss';
import toast from 'react-hot-toast';
import { EMAIL } from '../../const/settings';

const Contact = () => {
    return (
        <section className="contact">
            <div className="header">
                <h3>Share feedback</h3>
                <div className="break-line"></div>
            </div>

            <div className="section-content">
                <p>I'd love to hear from you. Share some feedback or just say hello</p>

                <div className="buttons">
                    <a className='btn' href={`mailto:${EMAIL}`}>Send e-mail</a>

                    <button onClick={() => {
                        navigator.clipboard.writeText(EMAIL)
                        toast.success('Copied e-mail address to your clipboard!')
                    }} className='btn'>Copy e-mail</button>
                </div>
            </div>
        </section>
    )
}

export default Contact;
