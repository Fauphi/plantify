import React from "react";

export default function PlantListItem(props) {
    return (
        <div
            style={{
                display: "inline-block",
                width: 200,
                margin: "20px 0px 20px 20px",
                borderRadius: 10,
                overflow: "hidden",
                // boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
                boxShadow:
                    "0 1px 10px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)"
            }}
        >
            <div className="top">
                <img width="200px" src={props.image} />
            </div>
            <div
                className="bottom"
                style={{
                    backgroundColor: "white",
                    overflow: "hidden",
                    padding: "0px 10px 10px"
                }}
            >
                <h4>{props.name}</h4>
                <p className="last-watering" style={{ fontSize: 10 }}>
                    2 days ago
                </p>
                <div className="warning"></div>
            </div>
        </div>
    );
}
