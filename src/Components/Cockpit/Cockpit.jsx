import React, {useEffect, useRef} from "react";
import styles from "./CockpitStyle";
import injectSheet from "react-jss";

const Cockpit = ({showAnimals, clicked, classes, title}) => {
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        // setTimeout(() => {
        //     console.log("hey");
        // }, 1000);
        toggleButtonRef.current.click();
        return () => {
            console.log("[Cockpit.js] cleanup work in useeffect");
        };
    }, []);

    useEffect(() => {
        console.log("[Cockpit.js] second useEffect");
        return () => {
            console.log("[Cockpit.js] cleanup work in useeffect2");
        };
    });
    const assignedclasses = [];

    if (showAnimals) {
        assignedclasses.push(classes.toggleAnimalsOpen);
    } else {
        assignedclasses.push(classes.toggleAnimals);
    }
    return (
        <div>
            <h1>{title}</h1>
            <button ref={toggleButtonRef} alt={showAnimals.toString()} className={assignedclasses} onClick={clicked}>
                Toggle animals
            </button>
        </div>
    );
};

export default injectSheet(styles)(Cockpit);
