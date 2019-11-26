import React from "react";

import Chart from "../Chart/Chart";
import PlantList from "../PlantList/PlantList";

export default function Dashboard(props) {
    return (
        <div>
            <div style={{ padding: "0 20px" }}>
                <h1>My Plants</h1>
                <h2>Plants ready for watering</h2>
            </div>
            <PlantList popupFn={props.popupFn} />
            <div style={{ padding: "0 20px" }}>
                <h2>Moisture Levels</h2>
                <Chart />
            </div>
        </div>
    );
}
