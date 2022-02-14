import './contact.scss';
import toast from 'react-hot-toast';

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
                    <a className='btn' href="mailto:blazej.wrzosok@gmail.com">Send e-mail</a>

                    <button onClick={() => {
                        navigator.clipboard.writeText("blazej.wrzosok@gmail.com")
                        toast.success('Copied to your clipboard')
                    }} className='btn'>Copy e-mail</button>
                </div>
            </div>
        </section>
    )
}

export default Contact;
