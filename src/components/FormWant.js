import React from 'react';

const FormWant = (props) => {
    return ( 
        <form className="text-white">
            <div className="form-check">
                <input type="radio" className="form-check-input" id="yesWant" name="wantForm"/>
                <label htmlFor="yesWant" className="form-check-label">Oui</label> 
            </div>
            <div className="form-check">
                <input type="radio" className="form-check-input" id="noWant" name="wantForm"/>
                <label htmlFor="noWant" className="form-check-label">Non</label> 
            </div>
            <div className="form-check">
                <input type="radio" className="form-check-input" id="nspWant" name="wantForm"/>
                <label htmlFor="nspWant" className="form-check-label">Ne sais pas ou pas d'opinion</label> 
            </div>
            <button type="submit" className="btn btn-outline-light rounded-0 mt-2">Envoyer</button>
        </form>
     );
}
 
export default FormWant;