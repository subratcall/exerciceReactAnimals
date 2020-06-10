import React from 'react';
import styles from './CockpitStyle';
import injectSheet from 'react-jss';

const Cockpit = ({showAnimals, clicked, classes}) => {
    const assignedclasses = []
    if (showAnimals){
        assignedclasses.push(classes.toggleAnimalsOpen);
    } else {
        assignedclasses.push(classes.toggleAnimals)

    }
    return (
        <div>
            <button
                alt={showAnimals.toString()}
                className={assignedclasses}
                onClick={clicked}
            >
            Toggle animals
            </button>
        </div>
    );
}

export default injectSheet(styles)(Cockpit);