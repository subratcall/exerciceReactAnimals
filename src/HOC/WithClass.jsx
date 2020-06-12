import React from "react";

const WithClass = (props) => <div className={props.myClasses}>{props.children}</div>;

export default WithClass;
