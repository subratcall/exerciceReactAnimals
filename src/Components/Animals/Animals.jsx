import React from 'react';
import Animal from './Animal/Animal'

const Animals = ({deleted, change, animals}) => animals.map((animal, index) => 
        <Animal 
            deleted={() => deleted(index)}
            change={(event) => change(event, animal.id)}
            name={animal.name} 
            type={animal.type}
            key={animal.id}
        />
);

export default Animals;