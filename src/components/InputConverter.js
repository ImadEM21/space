import React from 'react';


const InputConverter = (props) => {

    const handleChange = e => {
        props.onValueChange(e.target.value);
    };

    return ( 
        <>
            <input type="number" className="form-control input-bg"
            onChange={handleChange}
            value={props.value}/>
        </>
     );
}
 
export default InputConverter;