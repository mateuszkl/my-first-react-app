import React from "react"
import PropTypes from "prop-types"

export default class NavbarEntry extends React.Component {
    constructor(props) {
        super(props)

        this.handleOnTabClick = this.handleOnTabClick.bind(this)
    }

    handleOnTabClick() {
        this.props.onTabChange(this.props.name)
    }

    render() {
        const {name, active} = this.props
        return (
            <div className="navlink">
                <a className={active ? "active" : undefined}
                   onClick={this.handleOnTabClick}> {name}
                </a>
            </div>
        )
    }
}

NavbarEntry.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onTabChange: PropTypes.func.isRequired,
}