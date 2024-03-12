
// import React from 'react'

export const GifGridItem = ({ title, url, id}) => {
  return (
    <div className="card img">
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
    </div>
  )
}
