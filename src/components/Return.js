import React from 'react';
import { Link } from 'react-router-dom';

const Return = (props) => {
    return ( 
        <section className="container my-3 p-4">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <Link to='/' className="btn btn-outline-light rounded-0 mx-auto">
                        Revenir à la page principale
                    </Link>
                </div>
            </div>
        </section>
     );
}
 
export default Return;