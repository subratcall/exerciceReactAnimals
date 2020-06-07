import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    padding: 25px;
    border: 1px solid #eee;
    border-radius: 5px;
    box-shadow: 0px 0px 22px 0 rgba(181, 181, 181, 0.19);
    background: white;
    margin: 16px auto;
    font-weight: bolder;

    @media (min-width: 500px){
        width: 450px;;
    }
`;
const Animal = (animal) => {
    return (
        <StyledDiv>
            <p onClick={animal.delete}>My name is {animal.name}! I am a {animal.type}</p>
            <input className='input' type="text" onChange={animal.change} value={animal.name}/>
        </StyledDiv>
    )     
}

export default Animal;