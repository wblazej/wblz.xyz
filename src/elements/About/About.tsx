import './about.scss';

import { useEffect, useState } from "react";
import ProfilePicture from './../../img/profile_picture.jpeg';
import { GET_AGE_REQUEST } from '../../const/settings';

const About = () => {
    const [age, setAge] = useState(0)

    useEffect(() => {
        // fancy way to hide birth date with cloud functions :D
        fetch(GET_AGE_REQUEST)
        .then(res => res.json())
        .then(data => setAge(data.age))
    })

    return (
        <>
            <div className="text">
                <p>Hey, my name is Błażej and I'm a full stack software developer and cybersecurity researcher from Poland. Currently, I'm a {age} years old high school student. I really enjoy my job and try to do my best every single day.</p>

                <h4>Tech Stack</h4>
                <p>HTML, CSS, JavaScript, TypeScript, Python, Ruby, SQL, C++</p>

                <h4>Libraries & Frameworks</h4>
                <p>React.js, Sass, Node.js, Flask, Ruby on Rails</p>

                <h4>Tools & Platforms</h4>
                <p>Git, Docker, Google Cloud Platform, GitHub, Figma, Vercel, Cloudflare</p>

                <h4>Operating System</h4>
                <p>macOS Monterey 12.3.1</p>
            </div>
            <div className="profile-picutre">
                <img src={ProfilePicture} alt="profile" />
            </div>
        </>
    )
}

export default About;
