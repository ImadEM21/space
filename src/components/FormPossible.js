import React from 'react';

const FormPossible = (props) => {
    return ( 
        <form className="text-white"> 
            <div className="form-check">
                <input type="radio" className="form-check-input" id="yesPossible" name="possibleForm"/>
                <label htmlFor="yesPossible" className="form-check-label">Oui</label> 
            </div>
            <div className="form-check">
                <input type="radio" className="form-check-input" id="noPossible" name="possibleForm" />
                <label htmlFor="noPossible" className="form-check-label">Non</label>
            </div>
            <div className="form-check">
                <input type="radio" className="form-check-input" id="nspPossible" name="possibleForm" />
                <label htmlFor="nspPossible" className="form-check-label">Ne sais pas ou pas d'opinion</label>
            </div>
            <button type="submit" className="btn btn-outline-light rounded-0 mt-2">Envoyer</button>
        </form>
     );
}
 
export default FormPossible;