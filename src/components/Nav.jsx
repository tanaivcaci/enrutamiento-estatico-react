import React from "react";
import { Link } from "react-router-dom"
import '../App.css';

const Nav = () => {
    return (
        <ul className="Lista">
            <li><Link to="/">🏠🏠 Home 🏠🏠</Link></li>
            <li><Link to="/dog">🐶 Dog 🐶</Link></li>
            <li><Link to="/cat">🐱 Cat 🐱</Link></li>
        </ul>
    )
}

export default Nav; 