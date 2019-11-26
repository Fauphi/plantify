import React from "react";

import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
    const plants = [
        {
            image:
                "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1563812095/products/snake-plant-e0fede.jpg",
            name: "Plant1"
        },
        {
            image:
                "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1563806579/products/snake-plant-cb72e6.jpg",
            name: "Plant2"
        },
        {
            image:
                "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1563812091/products/snake-plant-e0fb21.jpg",
            name: "Plant3"
        }
    ];

    return (
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>
            <div
                className="scroll-wrapper"
                style={{
                    width: "100%",
                    overflowY: "hidden",
                    overflowX: "scroll",
                    WebkitOverflowScrolling: "touch"
                }}
            >
                <div
                    className="list-wrapper"
                    style={{ width: plants.length * 220, paddingRight: 20 }}
                >
                    {plants.map(plant => (
                        <PlantListItem
                            key={plant.name}
                            name={plant.name}
                            image={plant.image}
                            popupFn={props.popupFn}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
