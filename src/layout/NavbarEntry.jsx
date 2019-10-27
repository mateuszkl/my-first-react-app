import React from "react"
import PropTypes from "prop-types"

const NavbarEntry = (props) => {
    const {name, active, onTabChange} = props

    const handleOnTabClick = React.useCallback(() => {
        onTabChange(name)
    }, [name])

    return (
        <div className="navlink">
            <div className={active ? "active" : undefined}
                 onClick={handleOnTabClick}> {name}
            </div>
        </div>
    )
}

NavbarEntry.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onTabChange: PropTypes.func.isRequired,
}

export default NavbarEntry