import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button/Index";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = onClickNumber => {

    const renderNumber = number => (
        <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
    )
    return numbers.map(renderNumber)
}

const Numbers = ({ onClickNumber }) => (
    <div className="numbers">
        <section className="functions">
            {
                renderButtons(onClickNumber)
            }
        </section>
    </div>
);


Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

Numbers.defaultProps = {
    value: "0"
}

export default Numbers;