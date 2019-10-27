import React from "react"
import PropTypes from "prop-types"
import NavbarEntry from "./NavbarEntry"

const Navbar = (props) => {
    const {activeTabId, setActiveTabId} = props

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <NavbarEntry name="Audio recording equipment"
                             onTabChange={setActiveTabId}
                             active={activeTabId === "Audio recording equipment"}/>
            </a>
            <div className="navbar" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavbarEntry name="About me"
                                     onTabChange={setActiveTabId}
                                     active={activeTabId === "About me"}/>
                    </li>

                    <li className="nav-item">
                        <NavbarEntry name="Contact"
                                     onTabChange={setActiveTabId}
                                     active={activeTabId === "Contact"}/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    setActiveTabId: PropTypes.func.isRequired,
    activeTabId: PropTypes.string.isRequired,
}

export default Navbar