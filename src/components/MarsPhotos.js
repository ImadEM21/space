import React, { useEffect, useState } from 'react';
import apis from '../api/index';
import { Spinner, Alert } from 'react-bootstrap';
import ShowMarsPhoto from './ShowMarsPhoto';

const nombreAleatoire = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MarsPhotos = (props) => {
    const [marsImages, setMarsImages] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {  
        const getMarsImages = async sol => {
            apis.getMarsImages(sol)
            .then(res => {
                setMarsImages(res.data.photos);
                setIsLoading(false);
            })
            .catch(error => {
                setError(true);
                setIsLoading(false);
            });
        };

        getMarsImages(nombreAleatoire(0, 2427));
    }, [])

    return (
        <>
        {isLoading ?
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <Spinner variant="white" animation="grow"/>
                </div>
            </div>
        : null}
        {error ?
            <div className="row mt-5">
                <div className="col-12">
                    <Alert variant="danger" onClose={() => setError(false)} dismissible>
                        Une erreur s'est produite ⚒.
                    </Alert>
                </div>
            </div>
        : null}
        {marsImages ?
        <>
            <div className="row mt-5">
                <div className="col-12">
                    <h3 className="text-center text-white">Quelques photos prises sur Mars</h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <ShowMarsPhoto photos={marsImages}/>
                </div>
            </div>
        </>
        : null}
        </>
     );
}
 
export default MarsPhotos;