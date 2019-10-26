import React from "react"
import PropTypes from "prop-types"

export default class NavbarEntry extends React.Component {
    render() {
        const { name } = this.props

        return (
            <div>
                {name}
            </div>
        )
    }
}

NavbarEntry.propTypes = {
    name: PropTypes.string.isRequired
}