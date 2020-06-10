import React from 'react';

const Validation = ({textLength}) => {
    let validationMessage = 'Text long enough';
    if (textLength <= 5){
        validationMessage= 'Text too short'
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}
export default Validation;