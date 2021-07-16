import { useState } from "react"
import { FaGithub, FaVideo } from "react-icons/fa"
import {projects} from "../data/projects"
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

const Projects = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(projects)

    return (
        <>
        <section className="projects">
          <Fade left><h1>My Projects Page</h1></Fade>
        <Fade bottom>
          <div className="cards">
            {cards.map(({id, title, desc, github, result, image}) => (
                <article key={id}>
                    <Pulse delay={2000}><img src={image} alt={title} /></Pulse>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <ul>
                        <li><a href={github} target="_blank" rel="noopenner noreferrer" className="github"><FaGithub style={{ marginRight: 5 }}/>Github</a></li>
                        <li><a href={result} target="_blank" rel="noopenner noreferrer" className="result"><FaVideo style={{ marginRight: 5 }}/>Result</a></li>
                    </ul>
                </article>
            ))}
          </div>
        </Fade>
        </section>
        </>
    )
}

export default Projects
