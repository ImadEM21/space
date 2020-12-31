import React from 'react';

const ShowWeather = (props) => {
    
    return props.sols.reverse().map((sol) => {
        return (
            <div className="col-12 col-md-4 my-3" key={sol}>
                <div className="card no-bg border-white rounded-0 light-box">
                    <div className="card-body">
                        <h3 className="card-title">
                        Sol: {sol} 🛸
                        </h3>
                        <h6 className="card-subtitle text-muted">
                            Données prises entre le {new Date(props.weather[sol].First_UTC).toLocaleString("fr-FR", {timeZone: 'UTC'})} et 
                            le {new Date(props.weather[sol].Last_UTC).toLocaleString("fr-FR", {timeZone: 'UTC'})}
                        </h6>
                        {props.weather[sol].AT && props.weather[sol].PRE ?
                            <p className="card-text">
                                Température max: {Math.floor(props.weather[sol].AT.mx)}&deg;C<br />
                                Température min: {Math.floor(props.weather[sol].AT.mn)}&deg;C<br />
                                Température moyenne de {Math.floor(props.weather[sol].AT.av)}&deg;C<br /><br />
                                Pression max: {Math.floor(props.weather[sol].PRE.mx)} <strong>Pa</strong><br/>
                                Pression min: {Math.floor(props.weather[sol].PRE.mn)} <strong>Pa</strong><br/>
                                Pression moyenne de {Math.floor(props.weather[sol].PRE.av)} <strong>Pa</strong><br/>
                            </p>
                        :
                            <p className="cord-text">
                                Les données ne sont pas encore arrivés sur terre 🚀
                            </p>
                        }
                    </div>
                </div>
            </div>
        )
    });
}
 
export default ShowWeather;