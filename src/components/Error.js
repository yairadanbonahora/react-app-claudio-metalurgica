import React from 'react';
import { Navigate } from 'react-router-dom';

const error404 = () => {
    return (
        <div>
            <h3>La página que está buscando no existe</h3>
            <small>Serás redireccionado...</small>
        </div>
    )
};
export default error404;