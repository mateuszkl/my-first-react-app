import React from "react"
import PropTypes from "prop-types"
import {StudioEquipmentEntry} from "./StudioEquipmentEntry";

export class StudioEquipmentContainer extends React.Component {
    static getContentForTab(equipmentList, activeTabId) {
        switch (activeTabId) {
            case "About me": {
                return <h5>Work in progress...</h5>
            }
            case "Contact": {
                return <h5>Work in progress</h5>
            }
            default: {
                return (
                    <fieldset className="container">
                        <table className="table-striped">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col"/>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Priority</th>
                            </tr>
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
    }

    render() {
        const {equipmentList, activeTabId} = this.props

        return (
            <div className="container content">
                {StudioEquipmentContainer.getContentForTab(equipmentList, activeTabId)}
            </div>
        )
    }
}

StudioEquipmentContainer.propTypes = {
    equipmentList: PropTypes.array.isRequired,
    activeTabId: PropTypes.string.isRequired
}