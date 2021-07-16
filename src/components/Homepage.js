import {FaInstagram, FaGithub} from "react-icons/fa"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

const Homepage = () => {
    return (
        <>
          <section className="homepage">
              <div className="overlay">
                    <Zoom bottom>
                    <h1>Rifqi Fathurrohman</h1>
                    </Zoom>
                    <Tada delay={1000}>  
                    <p>Facebook Group | Morris IF'21</p>
                    </Tada> 
              <ul>
                <li>
                    <li>
                        <a href="https://www.instagram.com/rifqi.ftr/" target="_blank" rel="noopenner noreferrer"><Fade left><FaInstagram /></Fade></a></li>    
                </li>
                    <li><a href="https://github.com/rifqifathurrohman" target="_blank" rel="noopenner noreferrer"><Fade right><FaGithub /></Fade></a></li>
              </ul>
              </div>
          </section>
        </>
    )
}

export default Homepage
