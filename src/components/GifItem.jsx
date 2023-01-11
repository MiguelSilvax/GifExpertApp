import React from 'react'

export const GifItem = ({ id , title , url }) => {
    return (

        <div key={id} className="card">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    );
      
}
