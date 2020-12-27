import React from 'react';
import '../scss/stargate.scss';

const Stargate = (props) => {
    return ( 
        <section id="stargate" className="container">
            <div className="row">
                <div className="col-12">
                    <div className="stargate">
                        <div className="stargate__portal">
                            <video autoPlay muted playsInline loop>
                                <source src="https://res.cloudinary.com/shanomurphy/video/upload/v1520181785/water_obm8lb.webm" type="video/webm"/>
                                <source src="https://res.cloudinary.com/shanomurphy/video/upload/v1520181785/water_obm8lb.mp4" type="video/mp4"/> 
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
     );
}
 
export default Stargate;