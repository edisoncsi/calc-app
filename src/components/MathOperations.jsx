import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button/Index";

const MathOperations = ({ onClicOperations, onClicEqual }) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClicOperations}/>
        <Button text="-" clickHandler={onClicOperations}/>
        <Button text="*" clickHandler={onClicOperations}/>
        <Button text="/" clickHandler={onClicOperations}/>
        <Button text="=" clickHandler={onClicEqual}/>
    </section>
)


MathOperations.propTypes = {
    type: PropTypes.string,
    onClicOperations: PropTypes.func.isRequired,
    onClicEqual: PropTypes.func.isRequired
}

export default MathOperations