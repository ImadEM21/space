import React from 'react';
import FormPossible from './FormPossible';
import FormWant from './FormWant';

const Questions = (props) => {
    return (
        <> 
            <div className="row mt-4">
                <div className="col-12">
                    <h3 className="text-center text-white">Petit questionnaire</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className="text-white">Pensez vous que l'être humain va réussir à aller sur Mars ?</p>
                    <FormPossible />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <p className="text-white">Voulez vous aller sur Mars ?</p>
                    <FormWant />
                </div>
            </div>
        </>
     );
}
 
export default Questions;