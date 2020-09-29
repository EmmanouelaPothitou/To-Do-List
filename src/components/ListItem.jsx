import React, { useState } from 'react';

function ListItem (props){

    const [clicked, setClicked] = useState (false);

    function isClicked() {
        setClicked(!clicked);
    }

    return (
        <li onDoubleClick={() => {
            props.onChecked(props.id);
        }} onClick={isClicked} style={{textDecoration: clicked ? "line-through" : "none"}}>{props.text}</li>
    );
}

export default ListItem;