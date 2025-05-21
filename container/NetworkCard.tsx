import React from 'react'

interface Props {
    title: string;
    text: string;
    image: string;
}

const NetworkCard = ({title, text, image}:Props) => {
  return (
    <div>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default NetworkCard