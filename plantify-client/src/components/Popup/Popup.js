import React from "react";
import "./Popup.css";

export default function Popup(props) {
    const classes = props.status ? "popup open" : "popup";

    return (
        <div className={classes} onClick={() => props.popupFn(false)}>
            {props.children}
        </div>
    );
}
