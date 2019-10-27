import React from "react"
import PropTypes from "prop-types"

const StudioEquipmentEntry = (props) => {
    const {name, priority, imageUrl, price} = props

    return (
        <tr>
            <td>
                <div className="col-6">
                    <div className="card">
                        <img src={imageUrl} className="card-img-top" alt=""/>
                    </div>
                </div>
            </td>
            <td className="col-2">
                {name}
            </td>
            <td className="col-2">
                {price} zł
            </td>
            <td className="col-2">
                {priority}
            </td>
        </tr>

    )
}

StudioEquipmentEntry.propTypes = {
    name: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default StudioEquipmentEntry