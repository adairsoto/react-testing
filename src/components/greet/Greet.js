import { string } from "prop-types";
import React from "react";

const Greet = ({ name }) => {
    return (
        <div>Hello { name }</div>
    );
};

Greet.propTypes = {
    name: string 
};

export default Greet;