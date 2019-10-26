import React from "react"
import PropTypes from "prop-types"

export class StudioEquipmentEntry extends React.Component {
    render() {
        const {name, priority, imageUrl, price} = this.props

        return (
            <tr>
                <td>
                    <div className="col-6">
                        <div className="card">
                            <img src={imageUrl} className="card-img-top"/>
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
}

StudioEquipmentEntry.propTypes = {
    name: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}