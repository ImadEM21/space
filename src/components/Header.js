import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="container p-md-5 py-5">
            <div className="row my-5 p-4">
                <div className="col-12 d-flex align-items-center">
                    <FontAwesomeIcon 
                    icon={faSatellite} 
                    size="6x" 
                    color="white" 
                    className="m-auto border-circle p-4"
                    />
                </div>
            </div>
            <div className="row mt-4 p-4 border-top border-bottom">
                <div className="col-12 text-center text-white">
                    <h1>Bienvenu dans l'espace !</h1>
                    <p>
                        Vous allez découvrir ici quelques données que la NASA met à disposition au grand public.
                        Des photos, des vidéos et quelques données seront donc à découvrir sur ce site !
                    </p>
                </div>
            </div>
            <div className="row mb-4 mx-auto mt-4 w-50">
                <div className="col-12 d-block">
                    <Link to="/space" className="btn btn-outline-light btn-block rounded-0">
                        Voir le système solaire
                    </Link>
                </div>
                <div className="col-12 d-block my-3">
                    <Link to='/stargate' className="btn btn-outline-light btn-block rounded-0">
                        Voir le portail de Stargate 
                    </Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;