import React from 'react';
import './Animal.css'

const Animal = (animal) => {
    return (
        <div className="Animal">
            <p onClick={animal.delete}>My name is {animal.name}! I am a {animal.type}</p>
            <input className='input' type="text" onChange={animal.change} value={animal.name}/>
        </div>
    )     
}

export default Animal;