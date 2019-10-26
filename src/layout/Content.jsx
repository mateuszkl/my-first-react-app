import React from "react"
import {StudioEquipmentContainer} from "./studioequipment/StudioEquipmentContainer";
import * as DataSource from "./service/mock"

export default class Content extends React.Component {
    render() {
        return (
            <div className="container">
                {/*<Navbar /> todo fix navbar*/}
                <StudioEquipmentContainer equipmentList={DataSource.equipmentList}/>
            </div>
        )
    }
}