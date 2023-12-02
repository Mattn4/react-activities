import React from "react";
import NavButton from "./NavButton";

// a function to return all the menu buttons for the navigation bar
function displayNavbar(props){
    let arr = [];
    arr = Object.keys(props.navbarlinks).map(key =>
        <NavButton key={key} btnname={key} linkref={props.navbarlinks[key]}></NavButton>
    ) 
    return arr;
}

export default function Navbar(props){
    
    const nav = displayNavbar(props);
    return (
        <>
            <div className="navbar">
                {nav}                
            </div>

        </>
    );
}