
import React from 'react';

const ButtonB = ({ incrementB, countB }) => {
    console.log("render B called");
    return (
        <div>
            <button onClick={incrementB}>Button B - {countB}</button>
        </div>
    );
};

export default React.memo(ButtonB);
