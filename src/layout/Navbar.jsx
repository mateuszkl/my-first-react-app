import React from "react"
import NavbarEntry from "./NavbarEntry"

export class Navbar extends React.Component {
    render() {

        return (
            <nav>
                <div className="nav-wrapper orange darken-1 z-depth-4">
                    <div className="container col s12">
                        <a href="#" className="brand-logo"><i className="material-icons">Mic</i>My first React App</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <NavbarEntry name="About me"/>
                            <NavbarEntry name="Contact"/>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}