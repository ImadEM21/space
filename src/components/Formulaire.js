import React, {useState}  from 'react';
import apis from '../api/index';
import ShowImage from './ShowImage';


const Formulaire = (props) => {
    const [date, setDate] = useState('');
    const [hd, setHd] = useState(false);
    const [image, setImage] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        await apis.getImage(date, hd)
        .then(response => {
            setImage(response.data);
        })
        .catch(error => console.error(error.response));
    };

    return ( 
        <section id="formulaire" className="container p-md-5 py-5 mt-5">
            <div className="row">
                <div className="col-12 text-white">
                    <form className="d-flex flex-column flex-md-row align-items-center justify-content-between justify-content-md-center" onSubmit={handleSubmit}>
                        <div className="form-group w-25 ">
                            <label htmlFor="date">Date: </label>
                            <input type="date" id="date" className="form-control" value={date}
                            onChange={e => setDate(e.target.value)}
                            />
                        </div>
                        <div className="form-group form-check align-self-md-end mx-3">
                            <input type="checkbox" className="form-check-input" id="hd" value={hd}
                            onChange={e => setHd(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="hd">Photo en HD</label>
                        </div>
                        <button type="submit" className="btn btn-outline-light rounded-0">
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
            {image && 
                <ShowImage data={image}/>
            }
        </section>
     );
}

 
export default Formulaire;