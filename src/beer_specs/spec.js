import React from 'react';

let Spec = (props) => {
    let value;
    if(props.secondValue){
        value = props.firstValue + " - " + props.secondValue;
    } else {
        value = props.firstValue;
    }
    
    return (
        <div>
            <b>{props.parameter}</b> - {value} 
        </div>

    );
}

export default Spec;