import './contact.scss';

import toast from 'react-hot-toast';
import { EMAIL } from '../../const/settings';

const Contact = () => {
    return (
        <>
            <p>I'd love to hear from you. Share some feedback or just say hello</p>

            <div className="buttons">
                <a className='btn' href={`mailto:${EMAIL}`}>Send e-mail</a>

                <button onClick={() => {
                    navigator.clipboard.writeText(EMAIL)
                    toast.success('Copied e-mail address to your clipboard!')
                }} className='btn'>Copy e-mail</button>
            </div>
        </>
    )
}

export default Contact;
