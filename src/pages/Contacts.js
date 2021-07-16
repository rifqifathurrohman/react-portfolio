import { FaPhone, FaEnvelope, FaDiscord } from "react-icons/fa"
import Bounce from 'react-reveal/Bounce';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';

const Contacts = () => {
    return (
        <>
        <section className="contacts">
        <Fade left><h1>Contact Me</h1></Fade>
            <ul><Bounce><Tada delay={1000}>
                <li>
                    <a href="tel:085156581959"><FaPhone /> +62 851 5658 1959</a>
                </li>
                <li>
                    <a href="mailto:rifqifathurrohman236@gmail.com"><FaEnvelope /> rifqifathurrohman236@gmail.com</a>
                </li>
                <li>
                    <a href="discord:qii"><FaDiscord /> qii#2189</a>
                </li>
                </Tada></Bounce>
            </ul>
        </section>
        </>
    )
}

export default Contacts
