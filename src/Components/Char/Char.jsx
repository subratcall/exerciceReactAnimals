import React from 'react';
import injectSheet from 'react-jss';
import styles from './CharStyle';

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

export default injectSheet(styles)(CharComponent);