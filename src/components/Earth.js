import React, {useState} from 'react';
import apis from '../api/index';
import { Alert, Spinner } from 'react-bootstrap';

const Earth = (props) => {
    const [date, setDate] = useState('');
    const [imageEarth, setImageEarth] = useState('');
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    var today = new Date();
    today = today.toISOString().slice(0, 10);

    const handleSubmit = async e => {
        e.preventDefault();
        setImageEarth(''); // if an Image is already on screen delete the image
        setImageError(false); // if the error message is already showing delete the message 

        await apis.getData(date)
        .then(res => {
            const aleatoire = nombreAleatoire(0, res.data.length - 1);
            const image = res.data[aleatoire].image; // in the response there is an array with multiple angles of the Earth so we'll choose one at random 
            const time = date.split('-').join('/');
            setImageEarth(`https://epic.gsfc.nasa.gov/archive/natural/${time}/jpg/${image}.jpg`);
            setIsLoading(false);
        })
        .catch(error => {
            setImageError(true);
            setIsLoading(false);
        });
    };

    const nombreAleatoire = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    return ( 
        <section id="earth" className="container p-md-5 py-5 text-white border-left border-right border-top border-white mt-3">
            <div className="row mb-4">
                <div className="col-12">
                    <h3 className="text-center my-3">Qu'en est-il de notre planète ?</h3>
                    <p className="text-justify">
                        Depuis le 31 août 2015 le NASA met également en ligne des photos en temps réel de la Terre depuis 
                        l'espace.<br />
                        Depuis cette date on a quasiment une photo par jour sous différents angles, alors choississez une date 
                        pour voir notre sublime planète.
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group d-flex justify-content-md-center justify-content-between">
                            <label htmlFor="earth-date">Date: </label>
                            <input type="date" id="earth-date" className="form-control w-25 mx-3" 
                            value={date} min="2015-08-31" max={today} required
                            onChange={e => setDate(e.target.value)}/>
                            <button type="submit" className="btn btn-outline-light rounded-0" onClick={() => setIsLoading(true)}>
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {isLoading ?
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <Spinner variant="white" animation="grow"/>
                    </div>
                </div>
            : null}
            {imageEarth ?
                <div className="row">
                    <div className="col-12">
                        <a href={imageEarth}><img src={imageEarth} alt="The Earth" /></a>
                    </div>
                </div>
            : null}
            {imageError ?
                <div className="row">
                    <div className="col-12">
                    <Alert variant="danger" onClose={() => setImageError(false)} dismissible>
                        Il n'y a pas de photo pour cette date 😲
                    </Alert>
                    </div>
                </div>
            : null}
        </section>
     );
}
 
export default Earth;