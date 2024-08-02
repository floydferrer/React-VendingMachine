import React from "react";
import { Link } from "react-router-dom";

function Coffee () {
    return (
        <div>
            <h1>KOFFING!!</h1>
            <img
                src="https://pa1.aminoapps.com/6626/d2b9850e1df0b5db032abaeb4366c477496321b1_hq.gif"
                alt="Koffing!"
            />
            <div><Link to='/' style={{textDecoration: 'none', color: 'black'}}>Grab another drink</Link></div>
        </div>
    )
}

export default Coffee;