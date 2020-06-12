import React, {Component} from "react";
import injectSheet from "react-jss";
import styles from "./AnimalStyle";

class Animal extends Component {
    render() {
        console.log("[Animal.js] rendering...");
        return (
            <div className={this.props.classes.Animal}>
                <p onClick={this.props.deleted}>
                    My name is {this.props.name}! I am a {this.props.type}
                </p>
                <input className="input" type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        );
    }
}

export default injectSheet(styles)(Animal);
