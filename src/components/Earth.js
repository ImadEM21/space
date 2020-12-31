import React, {useState} from 'react';
import apis from '../api/index';
import { Alert } from 'react-bootstrap';

const Earth = (props) => {
    const [date, setDate] = useState('');
    const [imageEarth, setImageEarth] = useState('');
    const [imageError, setImageError] = useState(false);
    var today = new Date();
    today = today.toISOString().slice(0, 10);

    const handleSubmit = async e => {
        e.preventDefault();
        setImageEarth(''); // if an Image is already showing delete the image
        setImageError(false); // if the error message is already showing delete the message 

        await apis.getData(date)
        .then(res => {
            const aleatoire = nombreAleatoire(0, res.data.length - 1);
            const image = res.data[aleatoire].image; // in the response there is an array with multiple angles of the Earth so we'll choose one at random 
            const time = date.split('-').join('/');
            setImageEarth(`https://epic.gsfc.nasa.gov/archive/natural/${time}/jpg/${image}.jpg`);
        })
        .catch(error => setImageError(true));
    };

    const nombreAleatoire = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    return ( 
        <section id="earth" className="container p-md-5 py-5 text-white">
            <div className="row mb-4">
                <div className="col-12">
                    <h3 className="text-center my-3">Et si vous pouviez voir une photo de la terre depuis l'espace ?</h3>
                    <p className="text-justify">
                        En effet, en plus d'avoir des photos et vidéos chaque jour de la NASA, on peut également 
                        avoir des photos de notre planète chaque jour.<br />
                        Alors pour voir ça il suffit de choisir la date pour avoir la photo de la Terre qui lui 
                        correspond.
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
                            <button type="submit" className="btn btn-outline-light rounded-0">
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
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