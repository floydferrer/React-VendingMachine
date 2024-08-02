import React from "react";
import { Link } from "react-router-dom";

function Gatorade () {
    return (
        <div>
            <h1>WATER SUCKS! IT REALLY REALLY SUCKS!</h1>
            <img
                src="https://y.yarn.co/3b457c01-a642-4095-b4d8-b7190d5b220a_text.gif"
                alt="Gatorade vs. Water"
            />
            <div><Link to='/' style={{textDecoration: 'none', color: 'black'}}>Grab another drink</Link></div>
        </div>
    )
}

export default Gatorade;