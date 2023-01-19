import React from 'react';

import PropTypes from 'prop-types';


export const GifItem = ({ id , title , url }) => {
    return (
        <div key={id} className="card">
            <p aria-label='title-label'>{title}</p>
            <img src={url} alt={title} id='img'/>
        </div>
    );
      
}

GifItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url : PropTypes.string.isRequired,
}
