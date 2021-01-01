import React, {useState}  from 'react';
import apis from '../api/index';
import ShowImage from './ShowImage';
import { Alert, Spinner } from 'react-bootstrap';


const Formulaire = (props) => {
    const [date, setDate] = useState('');
    const [hd, setHd] = useState(false);
    const [image, setImage] = useState();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    var today = new Date().toISOString().slice(0, 10);

    const handleSubmit = async e => {
        e.preventDefault();
        setError(false);
        setImage();

        await apis.getImage(date, hd)
        .then(response => {
            setImage(response.data);
            setIsLoading(false);
        })
        .catch(error => {
            setError(true)
            setIsLoading(false);
        });
    };

    return ( 
        <section id="formulaire" className="container p-md-5 py-5 mt-0 border-left border-right border-bottom border-white">
            <div className="row">
                <div className="col-12 text-white">
                    <form className="d-flex flex-column flex-md-row align-items-center justify-content-between justify-content-md-center" onSubmit={handleSubmit}>
                        <div className="form-group w-25 ">
                            <label htmlFor="date">Date: </label>
                            <input type="date" id="date" className="form-control" value={date}
                            onChange={e => setDate(e.target.value)}
                            max={today} min="1995-06-16"
                            />
                        </div>
                        <div className="form-group form-check align-self-md-end mx-3">
                            <input type="checkbox" className="form-check-input" id="hd" value={hd}
                            onChange={e => setHd(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="hd">Photo en HD</label>
                        </div>
                        <button type="submit" className="btn btn-outline-light rounded-0" onClick={() => setIsLoading(true)}>
                            Envoyer
                        </button>
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
            {image && 
                <ShowImage data={image}/>
            }
            {error ?
                <div className="row">
                    <div className="col-12">
                        <Alert variant="danger" onClose={() => setError(false)} dismissible >
                            Une erreur s'est produite ⚒.
                        </Alert>
                    </div>
                </div>
            : null}
        </section>
     );
}

 
export default Formulaire;