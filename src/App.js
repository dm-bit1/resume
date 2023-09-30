import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import ImageButton from "./components/ImageButton";
import githubImage from './github.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {Container} from 'react-bootstrap';
import "./custom.css";
import "./styles.css";
import {faWrench, faBuildingColumns} from '@fortawesome/free-solid-svg-icons';

const background = new URL("./IMG_2818.JPG",import.meta.url)
// Used under div className; <img src={background}/>
function App() {
  return (
        <section className="main-container">
          <h1>
            David Miszczyk <br/>
          </h1>
          <h2>
            BS in Computer Science in progress <FontAwesomeIcon icon={faBuildingColumns} color="White"/> <br/>
            This site was made with React, construction in progress <FontAwesomeIcon icon={faWrench} color="Silver"/>
          </h2>
          <div className="singleCol social-media-icons-white d-flex justify-content-evenly">
            <a href="https://github.com/dm-bit1" class="github-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/davidmiszczyk/" class="linked-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <div className="pdf-container">
              <a class="pdf-icon" href="/resume.pdf">
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
              <span>
                View resume
              </span>
            </div>
          </div>
        </section>
  );
}

export default App;