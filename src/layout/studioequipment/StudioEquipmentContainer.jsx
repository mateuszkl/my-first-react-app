import React from "react"
import PropTypes from "prop-types"
import {StudioEquipmentEntry} from "./StudioEquipmentEntry";

export class StudioEquipmentContainer extends React.Component {
    render() {
        const {equipmentList} = this.props

        return (
            <fieldset className="container">
                <table className="table-striped">
                    <thead className="thead-dark">
                    <th scope="col"><h4>Studio equipment to buy</h4></th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Priority</th>
                    </thead>

                    <tbody>
                    {
                        equipmentList.map((equipment) => {
                            return <StudioEquipmentEntry price={equipment.price}
                                                         name={equipment.name}
                                                         priority={equipment.priority}
                                                         imageUrl={equipment.image}
                                                         key={equipment.id}/>
                        })
                    }
                    </tbody>
                </table>
            </fieldset>
        )
    }
}

StudioEquipmentContainer.propTypes = {
    equipmentList: PropTypes.array.isRequired,
}