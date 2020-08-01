import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FirstJsx from './firstJsx/firstJsx';
import SecondJsx from './secondJsx/secondJsx';
import ThirdJsx from './thirdJsx/thirdJsx';

let thing = 'default thing'
function rad(){
    alert(`RAD DOOODE! ${thing}!`)
}

function updateThing() {
    let value = document.getElementById('thing').value;
    thing = value;
    console.log('VALUE: ', value, ' - ', thing);
}

ReactDOM.render(
  <React.StrictMode>
    <App>
        <FirstJsx name={'bwork'} onClick={() => alert('RAAAD')} />
    </App>
    {thing !== 'default thing' ? (
        FirstJsx({name: 'dude', onClick: rad})
    ) : (
        <h2>Idk man...</h2>
    )}
    <SecondJsx thing={thing}/>
    <br/>
    <input type="text" name="thing" id="thing"/>
    <button onClick={() => updateThing()}>Change thing</button>
    <ThirdJsx />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
