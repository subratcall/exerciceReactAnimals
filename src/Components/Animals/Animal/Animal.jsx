import React, {Component} from "react";
import injectSheet from "react-jss";
import styles from "./AnimalStyle";
import AuthContext from "../../../context/auth-context";

class Animal extends Component {
    render() {
        console.log("[Animal.js] rendering...");
        return (
            <div className={this.props.classes.Animal}>
                {console.log("isAuth", this.props.isLoggedIn)}
                <AuthContext.Consumer>
                    {(context) => (context.authenticated ? <p>Logged In</p> : <p>Please log in</p>)}
                </AuthContext.Consumer>
                <p onClick={this.props.deleted}>
                    My name is {this.props.name}! I am a {this.props.type}
                </p>
                <input className="input" type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        );
    }
}

export default injectSheet(styles)(Animal);
