import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Posts extends Component {
    render() {
        const postIDs = ["Antibiotics", "Inotropics", "Fluid status", "ECG", "Acid-base status"];
        const lists = postIDs.map((i, index) => (
            <li key={index}>
                <NavLink to={"/posts/" + i}>{i}</NavLink>
            </li>
        ));
        return (
            <div>
                {lists}
            </div>
        );
    }
}
