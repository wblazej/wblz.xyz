import './about.scss';
import ProfilePicture from './../../img/profile_picture.jpeg';

const About = () => {

    return (
        <>
            <div className="text">
                <p>Hey, my name is Błażej and I'm a full stack software developer and cybersecurity researcher from Poland. Currently, I'm a 17 years old high school student. I really enjoy my job and try to do my best every single day.</p>

                <h4>Tech Stack</h4>
                <p>HTML, CSS, JavaScript, TypeScript, Python, SQL, Ruby, C++</p>

                <h4>Libraries & Frameworks</h4>
                <p>React.js, Sass, Node.js, Flask, Ruby on Rails</p>

                <h4>Tools & Platforms</h4>
                <p>Git, Docker, Google Cloud Platform, GitHub, Figma</p>
                
                <h4>Operating System</h4>
                <p>macOS Monterey 12.1</p>
            </div>
            <div className="profile-picutre">
                <img src={ProfilePicture} alt="profile" />
            </div>
        </>
    )
}

export default About;
