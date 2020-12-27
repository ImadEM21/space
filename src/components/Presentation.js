import React from 'react';
import { Link } from 'react-scroll';

const Presentation = (props) => {
    return ( 
        <section id="presentation" className="container p-md-5 text-center text-white mb-5">
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-3">Les photos et vidéos de la NASA</h2>
                    <p className="text-justify">
                        Saviez-vous que la NASA prend chaque jour une photo ou une vidéo de l'espace ou de leurs équipements 
                        qu'elle met à disposition de tous les internautes ?<br />
                        En effet, on peut avoir accès à une photo ou vidéo de n'importe quelle date depuis que la NASA rend ces données 
                        publiques.<br />
                        Et c'est ce qu'on va voir ici, avec un simple formulaire où il faudra rentrer la date que vous 
                        souhaitez, vous allez voir la photo ou vidéo qui a été prise et une explication qui va avec !
                    </p>
                </div>
            </div>
            <div className="row w-50 mx-auto mb-5">
                <div className="col-12">
                    <Link activeClass="active" to="formulaire" spy={true} smooth={true} className="btn btn-outline-primary btn-block rounded-0">
                        Chercher des photos et des vidéos
                    </Link>
                </div>
            </div>
        </section>
     );
}
 
export default Presentation;