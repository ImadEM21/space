import React from 'react';
import { Carousel } from 'react-bootstrap';

const ShowMarsPhoto = (props) => {
    return ( 
        <Carousel>
            {
                props.photos.map((photo) => {
                    return (
                        <Carousel.Item key={photo.id}>
                            <img src={photo.img_src} className="d-block w-100" alt="Mars" />
                            <Carousel.Caption>
                                <h3>Robot: {photo.rover.name}</h3>
                                <p>Jour: {new Date(photo.earth_date).toLocaleDateString("fr-FR")}</p>
                                <p>Sol: {photo.sol}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })
            }
        </Carousel>
     );
}
 
export default ShowMarsPhoto;