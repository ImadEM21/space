import React from 'react';

const Presentation = (props) => {
    return ( 
        <section id="presentation" className="container border-left border-right border-white p-md-5 text-center text-white mb-0">
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-3">Une photo ou vidéo par jour</h2>
                    <p className="text-justify">
                        Saviez-vous que la NASA met à disposition une photo ou une vidéo chaque jour depuis le 16 juin 1995 ?<br />
                        En effet, on peut avoir accès à une photo ou vidéo de n'importe quelle date depuis que la NASA rend ces données 
                        publiques.<br />
                        Et c'est ce qu'on va voir ici, avec un simple formulaire où il faudra rentrer la date que vous 
                        souhaitez, vous allez voir la photo ou vidéo qui a été prise et une explication qui va avec !
                    </p>
                </div>
            </div>
        </section>
     );
}
 
export default Presentation;