import React from 'react'

export const GifItem = ( { images } ) => {
  return (
      images.map(item => {
          return (
              <div key={item.id} className="card">
                  <p>{item.title}</p>
                  <img src={item.url} alt="" />
              </div>
          );
      })
  )
}
