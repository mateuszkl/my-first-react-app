import React from "react"
import PropTypes from "prop-types"
import NavbarEntry from "./NavbarEntry"

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.setActiveTab = this.setActiveTab.bind(this)
    }

    setActiveTab(newActiveTab) {
        console.log("NAVBAR: Setting activeTabId to:", newActiveTab)
        this.props.handleTabChange(newActiveTab)
    }

    render() {
        const {activeTabId} = this.props

        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <NavbarEntry name="Audio recording equipment"
                                 onTabChange={this.setActiveTab}
                                 active={activeTabId === "Audio recording equipment"}/>
                </a>
                <div className="navbar" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavbarEntry name="About me"
                                         onTabChange={this.setActiveTab}
                                         active={activeTabId === "About me"}/>
                        </li>

                        <li className="nav-item">
                            <NavbarEntry name="Contact"
                                         onTabChange={this.setActiveTab}
                                         active={activeTabId === "Contact"}/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    handleTabChange: PropTypes.func.isRequired,
    activeTabId: PropTypes.string.isRequired,
}