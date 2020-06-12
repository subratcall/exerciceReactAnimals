import React from "react";

const WithClass = (props) => <div className={props.myClasses}>{props.children}</div>;

// const WithClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent />
//         </div>
//     );
// };

export default WithClass;
