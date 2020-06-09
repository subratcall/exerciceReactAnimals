import React from 'react';
import injectSheet from 'react-jss';
// import './Animal.css'

const styles = {
    Animal: {
        width: '60%',
        padding: '25px',
        border: '1px solid #eee',
        borderRadius: '5px',
        boxShadow: '0px 0px 22px 0 rgba(181, 181, 181, 0.19)',
        background: 'white',
        margin: '16px auto',
        fontWeight: 'bolder'
    }
}

const Animal = ({name, type, deleted, classes}) => {
    return (
        <div className={classes.Animal}>
            <p onClick={deleted}>My name is {name}! I am a {type}</p>
            <input className='input' type="text" onChange={change} value={name}/> 
        </div>
    )     
}

export default injectSheet(styles)(Animal);