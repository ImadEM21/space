import React, { useState } from 'react';
import InputConverter from './InputConverter';


const toDays = value => {
    return Math.round((value * 1.02) * 1000) / 1000;
};

const toSols = value => {
    return Math.round((value * 0.97) * 1000) / 1000;
};


const SolConverter = (props) => {
    const [value, setValue] = useState(0);
    const [scale, setScale] = useState('s');

    const handleSolsChange = value => {
        setScale('s');
        setValue(value);
    };

    const handleDaysChange = value => {
        setScale('d');
        setValue(value);
    };

    const sols = scale === 'd' ? toSols(value) : value;
    const days = scale === 's' ? toDays(value) : value;
    return ( 
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text rounded-0 no-bg">Valeur en Sols</span>
            </div>
            <InputConverter scale="s" value={sols} onValueChange={handleSolsChange}/>
            <InputConverter scale="d" value={days} onValueChange={handleDaysChange}/>
            <div className="input-group-append">
                <span className="input-group-text rounded-0 no-bg">Valeur en jours terrestres</span>
            </div>
        </div>
     );
}
 
export default SolConverter;