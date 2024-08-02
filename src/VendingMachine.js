import React from "react";
import './VendingMachine.css'
import Drinks from './Drinks'

const VendingMachine = () => {
    return (
        <div>
            <img src="https://wallpapercave.com/wp/wp10117060.png"></img>
            <p>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO DRINK?</p>
            <Drinks />
        </div>
    )
}

export default VendingMachine;