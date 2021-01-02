import React, { useEffect, useState } from 'react';
import apis from '../api/index';
import ShowWeather from './ShowWeather';
import SolConverter from './SolConverter';
import MarsPhotos from './MarsPhotos';
import { Spinner, Alert } from 'react-bootstrap';


const Mars = (props) => {
    const [weather, setWeather] = useState();
    const [showData, setShowData] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getWeather = async () => {
            await apis.getMarsWeather()
            .then(res => {
                setWeather(res.data);
                setIsLoading(false);
                setShowData(true);
            })
            .catch(error => {
                setIsLoading(false);
                setError(true);
            });
        };

        getWeather();        
    }, [])


    return ( 
        <>
        {isLoading ?
            <section id="mars" className="container-fluid p-md-5 py-5">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <Spinner variant="white" animation="grow"/>
                    </div>
                </div>
            </section>
        : null}
        {showData ?
        <section id="mars" className="container-fluid p-md-5 py-5">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-white">Et si on faisait un petit tour sur Mars ?</h2>
                </div>
            </div>
            <div className="row">
                <ShowWeather weather={weather} sols={weather.sol_keys}/>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h5 className="text-center text-white mb-3">Quelques données utiles</h5>
                    <ul className="text-white">
                        <li>1 Sol ≈ 24 heures 39 minutes et 35 secondes </li>
                        <li>1 heure martienne ≈ 1,02 heures terrestres</li>
                        <li>1 minutes martienne ≈ 1,02 minutes terrestres</li>
                        <li>1 seconde martienne ≈ 1,02 secondes terrestres</li>
                        <li>Pression moyenne sur Terre au niveau de la mer et à 15&deg;C ≈ 101 325 <strong>Pa</strong></li>
                        <li>Température moyenne sur Terre est de 15&deg;C</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <SolConverter />
                </div>
            </div>
            <MarsPhotos />
        </section>
        : null}
        {error ?
            <section id="mars" className="container-fluid p-md-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <Alert variant="danger" onClose={() => setError(false)} dismissible>
                            Une erreur s'est produite ⚒.
                        </Alert>
                    </div>
                </div>
            </section>
        : null}
        </>
     );
}
 
export default Mars;