import React from 'react';
import '../scss/space.scss';


const Space = (props) => {
    return (
        <div className="body w-100">
        <div className="system">
            <div className="sun"></div>
            <div className="mer-path"></div>
            <div className="mer"></div>
            <div className="ven-path"></div>
            <div className="ven"></div>
            <div className="ear-path"></div>
            <div className="ear">
                <div className="lune"></div>
            </div>
            <div className="mar-path"></div>
            <div className="mar">
                <div className="pho"></div>
                <div className="dem"></div>
            </div>
            <div className="jup-path"></div>
            <div className="jup">
                <div className="spot"></div>
                <div className="jove io"></div>
                <div className="jove eur"></div>
                <div className="jove gan"></div>
                <div className="jove cal"></div>
            </div>
            <div className="sat-path"></div>
            <div className="sat">
                <div className="f-ring"></div>
                <div className="a-ring"></div>
                <div className="b-ring"></div>
                <div className="c-ring"></div>
            </div>
            <div className="ura-path"></div>
            <div className="ura">
                <div className="e-ring"></div>
            </div>
            <div className="nep-path"></div>
            <div className="nep">
                <div className="spot"></div>
            </div>
            <div className="plu-path"></div>
            <div className="plu"></div>
        </div>
        </div>
     );
}
 
export default Space;