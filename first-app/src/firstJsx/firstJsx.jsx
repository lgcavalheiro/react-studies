import React from 'react';
import './firstJsx.css';

export default function firstJsx(props) {
    const {name, onClick } = props;
    let bwork = (
        <br/>
    )

    if(name === 'bwork'){
        bwork = (
            <>  
                <p>Also use props.children if you want nested components and stuff y'know...</p>
                <p>And if you nest component the css spills over to the children (like you would expect anyway just fyi ;))</p>
            </>
        )
    }

    return (
        <div>
            <h2>Hello JSX World!</h2>
            <h3>Here's a list of random things:</h3>
            <ul>
                <li>One random thing</li>
                <li>Two random thing</li>
                <li>Three random thing</li>
                <li>emmet</li>
                <li>works</li>
                <li>only</li>
                <li>on</li>
                <li>jsx</li>
                <li>files!</li>
            </ul>
            <br/>
            <button onClick={onClick}>You should click this cool button, {name}!</button>
            {bwork}
        </div>
    )
}
