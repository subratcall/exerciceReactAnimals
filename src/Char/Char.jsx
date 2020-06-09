import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    char: {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid #eee',
        borderRadius: '5px',
        boxShadow: '0 10px 16px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        background: 'white'
    }
}
const CharComponent = ({character, deleted, classes}) => {
    return (
        <div 
            className={classes.char}
            onClick={deleted}
            >
            {character}
        </div>
    )
}

export default injectSheet(styles)(CharComponent)