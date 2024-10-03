
import React from 'react';

const ButtonA = ({ incrementA, countA }) => {
    console.log("render A called");
    return (
        <div>
            <button onClick={incrementA}>Button A - {countA}</button>
        </div>
    );
};

export default React.memo(ButtonA);
