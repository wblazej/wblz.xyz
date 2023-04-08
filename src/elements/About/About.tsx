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
                <p>Hey, my name is Błażej and I'm a full stack software developer and cybersecurity researcher from Poland. Right now, as the industry changes dynamically, my interests are heading towards blockchain technology and machine learning. As a side hobby, I make research on cryptocurrency markets and learn how to make profit from trading. Currently, I'm a {age} years old high school student. I really enjoy my job and try to do my best every single day.</p>

                <h4>Tech Stack</h4>
                <p>TypeScript, Python, Ruby, SQL, C++, HTML, CSS, JavaScript</p>

                <h4>Libraries & Frameworks</h4>
                <p>Ruby on Rails, React.js, Next.js, Sass, Node.js, Flask, aiohttp</p>

                <h4>Tools & Platforms</h4>
                <p>Git, Docker, Google Cloud Platform, GitHub, Figma, Vercel, Cloudflare, OpenAI</p>

                <h4>Operating System</h4>
                <p>macOS Ventura 13.3.1</p>
            </div>
            <div className="profile-picutre"></div>
        </>
    )
}

export default About;
