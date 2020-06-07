import React from 'react'
import './Char.css'

const CharComponent = ({character, deleted}) => {

    return (
        <div 
            className="char"
            onClick={deleted}
            >
            {character}
        </div>
    )
}

export default CharComponent;