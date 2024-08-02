import React from "react";
import { Link } from "react-router-dom";

function DrPepper () {
    return (
        <div>
            <h1>AHHHH... SO REFRESHING</h1>
            <img
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWs4d3NzbmJ4bXlmZTl1Y243ZzZ5aTdjNWQ1Y2s5N3hmMGZzbWdqNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mZQe81WukuW2c/200.webp"
                alt="Forrest Dr. Pepper"
            />
            <div><Link to='/' style={{textDecoration: 'none', color: 'black'}}>Grab another drink</Link></div>
        </div>
    )
}

export default DrPepper;