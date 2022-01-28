import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
    const iKstyle = { color: "red" };

    return (
        <header className="iKheader">
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? iKstyle : undefined
                            }
                        >
                            Home page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="side"
                            style={({ isActive }) =>
                                isActive ? iKstyle : undefined
                            }
                        >
                            Side page
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
