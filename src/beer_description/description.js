import React from 'react';

var Paragraph = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
};

var Description = (props) => {
    var desc = props.description;
    var paragraphs = [];
    for (var key in desc.detailed_description){
            paragraphs.push(<Paragraph key={key} title={key} text={desc.detailed_description[key]}/>);
    }
    return (
        <div>
            <h2>{ desc.name }</h2>
            <h4>Category: {desc.subcategory}</h4>
            {paragraphs}
        </div>
    );

}

export default Description;