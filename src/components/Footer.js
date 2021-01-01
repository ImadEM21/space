import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return ( 
        <footer id="footer" className="container p-md-5 py-5">
            <div className="row">
                <div className="col-12">
                    <ul className="d-flex flex-row justify-content-center list-group no-bg">
                        <li className="mx-4">
                            <a href="https://twitter.com/Imadpirlo21" className="icon-hover">
                                <FontAwesomeIcon icon={faTwitter} size="2x"/>
                            </a>
                        </li>
                        <li className="mx-4">
                            <a href="https://github.com/ImadEM21" className="icon-hover">
                                <FontAwesomeIcon icon={faGithub} size="2x"/>
                            </a>
                        </li>
                        <li className="mx-4">
                            <a href="mailto:contact@imadelmahrad.com" className="icon-hover">
                                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                            </a>
                        </li>
                        <li className="mx-4">
                            <a href="https://www.linkedin.com/in/imad-elmahrad-61a3861aa" className="icon-hover">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <p className="text-white text-center">&copy; <a href="https://imadelmahrad.com" className="text-white">Imad Elmahrad</a></p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;