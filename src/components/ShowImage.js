import React, {useState} from 'react';
import apis from '../api/index';


const ShowImage = (props) => {
    let date = new Date(props.data.date);
    date = date.toLocaleDateString("fr-FR");
    const [description, setDescription] = useState(props.data.explanation);
    const [translate, setTranslate] = useState(true);

    const handleClick = async e => {
        await apis.translate(props.data.explanation)
        .then(response => {
            setDescription(response.data.text[0]);
            setTranslate(false);
        })
        .catch(error => console.error(error));
    };

    const cancelTranslate = e => {
        setDescription(props.data.explanation);
        setTranslate(true);
    };


    if (props.data.media_type === "image") {
        return ( 
            <div className="row my-3">
                <div className="col-12">
                    <div className="card">
                        <a href={props.data.hdurl}><img src={props.data.hdurl} alt={props.data.title} className="card-img-top"/></a>
                        <div className="card-body">
                            <h4 className="card-title">{props.data.title}</h4>
                            <p className="card-subtitle text-muted">{date}</p>
                            <p className="card-text">
                                {description}
                            </p>
                            {translate ? 
                            <button type="button" className="btn btn-link" onClick={handleClick}>
                                Traduire la description
                            </button> 
                            :
                            <button type="button" className="btn btn-link" onClick={cancelTranslate}>
                                Revenir à une description en anglais
                            </button>
                            }
                        </div>
                        {props.data.copyright ?
                        <div className="card-footer text-muted">
                            &copy; {props.data.copyright}
                        </div>
                        : null}
                    </div>
                </div>
            </div>
        );
    } else if (props.data.media_type === "video") {
        return (
            <div className="row my-3">
                <div className="col-12">
                    <div className="card">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" title={props.data.title} src={props.data.url} allowFullScreen></iframe>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{props.data.title}</h4>
                            <p className="card-subtitle text-muted">{date}</p>
                            <p className="card-text">
                                {description}
                            </p>
                            {translate ? 
                            <button type="button" className="btn btn-link" onClick={handleClick}>
                                Traduire la description
                            </button> 
                            :
                            <button type="button" className="btn btn-link" onClick={cancelTranslate}>
                                Revenir à une description en anglais
                            </button>
                            }
                        </div>
                        {props.data.copyright ?
                        <div className="card-footer text-muted">
                            &copy; {props.data.copyright}
                        </div> : null}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ShowImage;