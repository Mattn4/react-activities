import React from "react";
import "../App.css"

// First component created for main navigation
export default function NavButton(props){

    // return the button
    return (
        <>
            <a href={props.linkref} className="navbtn">
                {props.btnname}
            </a>
        </>
    );

}