import './about.scss';

const About = () => {
    return (
        <div className="slide">
            <h2>About</h2>
            <div className="slide-content-container">
                <div className="slide-content" id="about">
                    <p>I'm a full stack software developer, cyber security researcher, high school student and 17 years old Pole who loves gaining knowledge 🚀</p>
                    <p className="attribute"><i className="fas fa-map-marker-alt"></i><span>Poland 🇵🇱</span></p>
                    <p className="attribute"><i className="fas fa-birthday-cake"></i><span>17 years old</span></p>
                    <p className="attribute"><i className="fas fa-briefcase"></i><span>High school</span></p>
                </div>
            </div>
        </div>
    )
}

export default About;
