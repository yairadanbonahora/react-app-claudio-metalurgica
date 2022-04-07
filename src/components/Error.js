import React from 'react';
import {Link} from 'react-router-dom'

const error404 = () => {
    
    return (
        <div>
            <h1>Error 404</h1>
            <h3>La página que está buscando no existe</h3>
            <Link to='/'><button className="btn btn-primary">Volver a inicio</button></Link>
        </div>
    )
};
export default error404;