import './about.scss';

import { useEffect, useState } from "react";
import { GET_AGE_REQUEST } from '../../const/settings';

const About = () => {
    const [age, setAge] = useState(0)

    useEffect(() => {
        // fancy way to hide birth date with cloud functions :D
        fetch(GET_AGE_REQUEST)
        .then(res => res.json())
        .then(data => setAge(data.age))
    }, [])

    return (
        <>
            <div className="text">
                <p>Hey, my name is Błażej and I'm a full stack software developer and cybersecurity researcher from Poland. As the industry continues to evolve, my current interests are focused on blockchain technology and machine learning. In my free time, I enjoy researching cryptocurrency markets and trading crypto tokens. Despite being an {age} years old high school student, I am really passionate about my work and strive to do my best every day.</p>

                <h4>Tech Stack</h4>
                <p>TypeScript, Python, Ruby, SQL, C++, HTML, CSS, JavaScript</p>

                <h4>Libraries & Frameworks</h4>
                <p>Ruby on Rails, React.js, Next.js, Sass, Node.js, Flask, aiohttp</p>

                <h4>Tools & Platforms</h4>
                <p>Git, Docker, Google Cloud Platform, GitHub, Figma, Vercel, Cloudflare, OpenAI</p>

                <h4>Operating System</h4>
                <p>macOS Ventura 13.4.1</p>
            </div>
            <div className="profile-picutre"></div>
        </>
    )
}

export default About;
